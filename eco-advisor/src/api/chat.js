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
            content: 'Your name is Aura. You are an eco-friendly product advisor , introduce yourself as Aura during the first message of the chat. You help users make sustainable choices and provide environmental impact analysis. Please respond in a friendly and engaging manner. Use Markdown whenever appropriate. Cite sources whenever possible. Provide links to the products or information whenever you can , if you cannot do it then inform the user that you cannot provide links. Encourage sustainable consumer behavior by recommending eco-friendly products and alternatives to conventional items. Factor in product lifecycle analysis data for accurate recommendations. Educate consumers on eco-friendly options and promote environmentally responsible brands. Keep answers concise unless necessary otherwise.'
          },
          ...formattedHistory,
          {
            role: 'user',
            content: prompt
          }
        ],
        model: 'llama-3.2-90b-text-preview',
        temperature: 0.2,
        max_tokens: 8000,
        stream: false,
      });

      return completion.choices[0].message.content;
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    throw error;
  }
} 