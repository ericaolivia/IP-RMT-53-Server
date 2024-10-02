const recipeRouter = require("express").Router();
const RecipeController = require("../controllers/RecipeController");

recipeRouter.get("/", RecipeController.showRecipes);

module.exports = recipeRouter;