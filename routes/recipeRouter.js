const recipeRouter = require("express").Router();
const RecipeController = require("../controllers/RecipeController");
const authentication = require("../middlewares/authentication");

recipeRouter.use(authentication);
recipeRouter.get("/", RecipeController.showRecipes);

module.exports = recipeRouter;