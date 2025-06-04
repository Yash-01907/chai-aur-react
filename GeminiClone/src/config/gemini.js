const apiKey="AIzaSyAjPFmG7ZLaLevawlfS9dARFeuv35c3cd4"
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: apiKey });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text
}

export default main;