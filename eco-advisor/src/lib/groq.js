import Groq from 'groq-sdk';

export const client = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true  // Only for development
});