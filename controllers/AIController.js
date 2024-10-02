// const {openai} = require('openai');
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getRecipeRecommendations = async (req, res) => {
  try {
    const preferences = req.body.preferences;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that suggests recipes.",
        },
        {
          role: "user",
          content: `Suggest 3 recipes that match these preferences: ${preferences}`,
        },
      ],
      max_tokens: 150,
    });

    const query = response.choices[0].message.content;

    const spoonacularResponse = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          apiKey: process.env.SPOONACULAR_API_KEY,
          //   diet: 'vegetarian',  // Example filter based on user preferences
          query: query,
          number: 3,
        },
      }
    );

    const recipes = spoonacularResponse.data.results;
    res.status(200).json({ recipes });
  } catch (error) {
    console.error("Error getting recipe recommendations:", error);
    res.status(500).json({ error: "Failed to get recommendations" });
  }
};

module.exports = { getRecipeRecommendations };
