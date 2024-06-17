/* eslint-disable no-undef */

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

process.env.REACT_APP_GEMINI_API_KEY= "AIzaSyBKrKMpQxAu2nf5D7Jue1KMqaAy8_K6KHo"

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
// eslint-disable-next-line no-undef
} from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH
  }
]

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
       safetySettings,
      history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const responseText = await result.response.text();
  console.log(responseText);
   return responseText; 
}

export default run;