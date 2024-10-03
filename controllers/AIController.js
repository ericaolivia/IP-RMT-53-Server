const axios = require('axios');
const gemini = require("../helpers/gemini");

const getRecipeRecommendations = async (req, res) => {
  const {ingredients} = req.body;
  try {
    let data = await gemini(ingredients);

    // const aiResponse = await axios({
    //   method: 'post',
    //   url: 'https://localhost:3000/find-recipes', 
    //   headers: {
    //     'Authorization': `Bearer ${process.env.GOOGLE_AI_API_KEY}`, 
    //     'Content-Type': 'application/json',
    //   },
    //   data: {
    //     ingredients: ingredients
    //   }
    // });

    res.status(200).json(data);
  } catch (err) {
    console.error('Error calling Gemini AI:', err);
    res.status(500).json({ error: 'Failed to fetch recipes from AI.' });
  }
};

module.exports = { getRecipeRecommendations };
