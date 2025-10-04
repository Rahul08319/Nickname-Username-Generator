import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    usernames: {
      type: Type.ARRAY,
      description: "A list of 12 unique and creative usernames.",
      items: {
        type: Type.STRING,
        description: "A single username.",
      },
    },
  },
  required: ['usernames'],
};

export const generateUsernames = async (
  name: string,
  hobbies: string,
  favoriteWords: string,
  style: string
): Promise<string[]> => {

  const styleInstruction = style.toLowerCase() === 'random'
    ? 'The usernames can be a mix of styles: cool, funny, aesthetic, short, long, etc.'
    : `All usernames should fit the "${style.toLowerCase()}" style.`;

  // Dynamically build the prompt based on user input
  let promptFocusInstruction = 'Based on the following user details, generate 12 unique and creative usernames.';
  const userDetailsParts: string[] = [];
  const providedFields: string[] = [];

  if (name) {
    userDetailsParts.push(`- Name: ${name}`);
    providedFields.push('name');
  }
  if (hobbies) {
    userDetailsParts.push(`- Hobbies & Interests: ${hobbies}`);
    providedFields.push('hobbies');
  }
  if (favoriteWords) {
    userDetailsParts.push(`- Favorite Words: ${favoriteWords}`);
    providedFields.push('favorite words');
  }

  // Generate a more specific focus instruction
  if (providedFields.length > 1) {
    const focus = providedFields.slice(0, -1).join(', ') + ' and ' + providedFields.slice(-1);
    promptFocusInstruction = `Combine the user's ${focus} to generate 12 unique and creative usernames. Prioritize the hobbies and favorite words if they are provided.`;
  } else if (providedFields.length === 1) {
    promptFocusInstruction = `Generate 12 unique and creative usernames with a primary focus on the user's ${providedFields[0]}.`;
  }

  const userDetails = userDetailsParts.length > 0
    ? `User Details:\n${userDetailsParts.join('\n')}`
    : 'No specific user details provided. Generate a diverse list of usernames.';

  const prompt = `
    You are an expert username generator for gaming and social media.
    ${promptFocusInstruction}
    ${styleInstruction}
    Do not include any special characters other than underscores (_) or numbers.
    Do not use the user's real name unless it's part of a clever pun or transformation.
    Do not include any explanation, introduction, or concluding text. Only output the JSON object.

    ${userDetails}
    - Desired Style: ${style}

    Return the usernames in a JSON object with a single key "usernames" containing an array of 12 strings.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 1.0,
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);

    if (result && Array.isArray(result.usernames)) {
      return result.usernames;
    } else {
      console.error("Unexpected JSON structure:", result);
      throw new Error("Failed to parse usernames from API response.");
    }
  } catch (error) {
    console.error("Error generating usernames:", error);
    throw error;
  }
};