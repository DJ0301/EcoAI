import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

export async function handleChat(message, productLink = '', messageHistory = []) {
  try {
    let prompt = message;
    if (productLink) {
      prompt = `Analyze this product for environmental impact: ${productLink}`;
    }

    // Ensure messageHistory only contains valid properties
    const validMessageHistory = messageHistory.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an eco-friendly product advisor. You help users make sustainable choices and provide environmental impact analysis.'
        },
        ...validMessageHistory,
        {
          role: 'user',
          content: prompt
        }
      ],
      model: 'llama-3.2-90b-vision-preview',
      temperature: 0.7,
      max_tokens: 2048,
      stream: false,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Groq API Error:', error);
    throw error;
  }
}
