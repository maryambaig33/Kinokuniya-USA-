import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getBookRecommendations = async (userQuery: string): Promise<RecommendationResponse> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return {
      recommendations: [
        { title: "Kafka on the Shore", author: "Haruki Murakami", reason: "A surreal masterpiece blending metaphysical reality with a journey of self-discovery, perfect for those seeking deep narrative depth.", category: "Fiction" },
        { title: "Convenience Store Woman", author: "Sayaka Murata", reason: "A quirky, poignant look at societal expectations in modern Japan.", category: "Contemporary" },
        { title: "Kitchen", author: "Banana Yoshimoto", reason: "A touching story about loss, healing, and the comfort found in cooking and community.", category: "Fiction" }
      ]
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a knowledgeable bookseller at Kinokuniya USA. 
      Recommend 3 specific books (preferably Japanese literature, Manga, or high-quality international fiction) based on this user request: "${userQuery}".
      Focus on the unique atmosphere of Kinokuniya.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  author: { type: Type.STRING },
                  reason: { type: Type.STRING },
                  category: { type: Type.STRING }
                },
                required: ["title", "author", "reason", "category"]
              }
            }
          }
        }
      }
    });

    const jsonText = response.text || "{}";
    return JSON.parse(jsonText) as RecommendationResponse;

  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw new Error("Unable to reach the literary concierge.");
  }
};
