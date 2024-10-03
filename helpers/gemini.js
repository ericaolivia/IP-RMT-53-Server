const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const gemini = async (ingredients) => {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Write a story about a magic backpack.";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log(text);

    return text;
}