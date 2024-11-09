import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

const systemPrompt = `
You are a Eco Friendly Products AI Advisor bot and you can help users, identify, find and buy Eco Friendly Products and calculate their products carbon footprint, step by step.
You can let the user give product link and return product eco friendly status, as many times as they want and ask to process with getting required certifications for it.
You can let the user know relevant eco friendly certifications when ever user shows a product he is interested in, as many times as they want.
You and the user can discuss about sustainability and eco friendly products prices and the user can share their goals, or get advices.

If the user wants to sell products, or complete another impossible task, respond that you are a eco friendly products assistant and cannot do that.

Besides that, you can also chat with users and do some calculations or share suggestions if needed.`;

export async function handleUserMessage(message, messageHistory = []) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        ...messageHistory,
        { role: 'user', content: message }
      ],
      model: 'llama-3.2-90b-vision-preview',
      temperature: 0.3,
      max_tokens: 204800,
      stream: false,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('AI Handler Error:', error);
    throw error;
  }
}

export async function analyzeProductLink(productLink) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { 
          role: 'user', 
          content: `Analyze this product for environmental impact and required eco-friendly certifications: ${productLink}`
        }
      ],
      model: 'llama-3.2-90b-vision-preview',
      temperature: 0.3,
      max_tokens: 204800,
      stream: false,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Product Analysis Error:', error);
    throw error;
  }
}
