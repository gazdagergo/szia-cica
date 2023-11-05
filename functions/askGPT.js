"use server"

// import { revalidatePath } from "next/cache";
import OpenAI from "openai";
export const askGPT = async (prevState, formData) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "user",
        "content": `Válaszolj két mondatban: ${formData.get('question')}`
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });


  // return response //revalidatePath('/')
  return response?.choices[0].message.content
}
