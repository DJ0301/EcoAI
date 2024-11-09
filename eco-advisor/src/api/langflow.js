import { LangflowClient } from './LangflowClient';

const flowIdOrName = '2814e0aa-a990-4b9b-8c71-fe47e152282c';
const langflowClient = new LangflowClient('http://127.0.0.1:7860', '7wIHIBDuts1imEIoDHyxhEavMSA4quGl');

const defaultTweaks = {
  "ChatInput-GbG9w": {
    "files": "",
    "sender": "User",
    "sender_name": "User",
    "session_id": "",
    "should_store_message": true
  },
  "AstraVectorStoreComponent-n41VL": {
    "api_endpoint": "https://35919421-e0a8-42fd-a0a0-7c1f94b8367b-us-east-2.apps.astra.datastax.com",
    "batch_size": null,
    "bulk_delete_concurrency": null,
    "bulk_insert_batch_concurrency": null,
    "bulk_insert_overwrite_concurrency": null,
    "collection_indexing_policy": "",
    "collection_name": "test2",
    "embedding_service": "Astra Vectorize",
    "metadata_indexing_exclude": "",
    "metadata_indexing_include": "",
    "metric": "cosine",
    "namespace": "",
    "number_of_results": 4,
    "pre_delete_collection": false,
    "search_filter": {
      "_id": "$vector"
    },
    "search_input": "",
    "search_score_threshold": 0.7,
    "search_type": "Similarity",
    "setup_mode": "Sync",
    "token": "AstraCS:jnlxdalxGUAEFvScevJtCSxW:f9724fda76706684ed6c5897c339560b334bee09dbb1f728f9104c59a02cc7fa"
  },
  "ParseData-q9rs5": {
    "sep": "---",
    "template": "{text}\n---\n\nGiven the above context here are some relevant links: {links}"
  },
  "ChatOutput-J2FmS": {
    "data_template": "{text}",
    "input_value": "",
    "sender": "Machine",
    "sender_name": "AI",
    "session_id": "",
    "should_store_message": true
  },
  "note-34IK9": {},
  "note-AsNSV": {},
  "note-249FK": {},
  "GroqModel-RAOBx": {
    "groq_api_base": "https://api.groq.com",
    "groq_api_key": "GROQ_API_KEY",
    "input_value": "",
    "max_tokens": 8000,
    "model_name": "llama-3.2-90b-text-preview",
    "n": null,
    "stream": false,
    "system_message": "You are a Eco Friendly Products AI Advisor bot and you can help users, identify, find and buy Eco Friendly Products and calculate their products carbon footprint, step by step. You can let the user give product link and return product eco friendly status, as many times as they want and ask to process with getting required certifications for it. You can let the user know relevant eco friendly certifications when ever user shows a product he is interested in, as many times as they want. You and the user can discuss about sustainability and eco friendly products prices and the user can share their goals, or get advices.  If the user wants to sell products, or complete another impossible task, respond that you are a eco friendly products assistant and cannot do that.  Besides that, you can also chat with users and do some calculations or share suggestions if needed.",
    "temperature": 0.3
  },
  "Prompt-mB2cg": {
    "template": "{context}\n{links}\n---\n\nGiven the context above, and the relevant links answer the question as best as possible and list the sources mentioned in the links.\n\nQuestion: {question}\n\nAnswer: \n\n\nSources: ",
    "context": "",
    "question": "",
    "links": ""
  },
  "TavilyAISearch-TAxzB": {
    "api_key": "TAVILY_KEY",
    "include_answer": true,
    "include_images": true,
    "max_results": 5,
    "query": "",
    "search_depth": "advanced",
    "topic": "general"
  },
  "ParseJSONData-l5wxq": {
    "query": ".[] | select(has(\"results\")) | .results[] | {title: .title, url: .url}"
  },
  "ParseData-WqIJ5": {
    "sep": "\n",
    "template": "{text}"
  }
};

export async function handleLangflowChat(message, messageHistory = []) {
  try {
    // Don't modify input_value in tweaks
    const response = await langflowClient.runFlow(
      flowIdOrName,
      message,  // This is the input_value
      'chat',
      'chat',
      defaultTweaks,  // Use default tweaks without input_value
      false,
      (data) => console.log("Received:", data.chunk),
      (message) => console.log("Stream Closed:", message),
      (error) => console.error("Stream Error:", error)
    );

    if (response) {
      const flowOutputs = response.outputs[0];
      const firstComponentOutputs = flowOutputs.outputs[0];
      const output = firstComponentOutputs.outputs.message;
      return output.message.text;
    }
    
    throw new Error('No response from Langflow');
  } catch (error) {
    console.error('Langflow Chat Error:', error);
    throw error;
  }
}