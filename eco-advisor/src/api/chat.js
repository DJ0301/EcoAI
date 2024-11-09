import Groq from 'groq-sdk';
import { handleLangflowChat } from './langflow';

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

export async function handleChat(message, productLink = '', messageHistory = []) {
  try {
    // First try Langflow
    try {
      const langflowResponse = await handleLangflowChat(message, messageHistory);
      return langflowResponse;
    } catch (langflowError) {
      console.warn('Langflow failed, falling back to Groq:', langflowError);
      
      // Format message history for Groq
      const formattedHistory = messageHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

      // Fallback to Groq
      let prompt = message;
      if (productLink) {
        prompt = `Analyze this product for environmental impact: ${productLink}`;
      }

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Your name is Aura. You are an eco-friendly product advisor...'
          },
          ...formattedHistory,
          {
            role: 'user',
            content: prompt
          }
        ],
        model: 'llama-3.2-90b-text-preview',
        temperature: 0.7,
        max_tokens: 2048,
        stream: false,
      });

      return completion.choices[0].message.content;
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    throw error;
  }
} 