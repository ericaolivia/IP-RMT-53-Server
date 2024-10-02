const aiRouter = require("express").Router();
const {getRecipeRecommendations} = require("../controllers/AIController");

aiRouter.post('/api/ai/recommend', getRecipeRecommendations);

module.exports = aiRouter;