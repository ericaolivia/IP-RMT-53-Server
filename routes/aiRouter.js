const aiRouter = require("express").Router();
const {getRecipeRecommendations} = require("../controllers/AIController");

aiRouter.post('/find-recipes', getRecipeRecommendations);

module.exports = aiRouter;