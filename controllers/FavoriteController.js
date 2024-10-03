const axios = require("axios");
const { Recipe, Favorite } = require("../models");

class FavoriteController {
  static async showFavorite(req,res,next){
    try{

    } catch (err){
      next(err);
    }
  }
  static async createFavorite(req, res, next) {
    const { id } = req.params;
    try {
      let recipe = await Recipe.findOne({ where: { id } });

      if (!recipe) {
        const apiResponse = await axios({
          method: "get",
          url: `https://api.spoonacular.com/recipes/${id}/information`,
          params: {
            apiKey: process.env.SPOONACULAR_API_KEY,
          },
        });
        const recipeData = apiResponse.data;

        const apiResponse2 = await axios({
          method: "get",
          url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
          params: {
            apiKey: process.env.SPOONACULAR_API_KEY,
          },
        });

        const recipeData2 = apiResponse2.data;

        const instructionsArray = recipeData2.steps.map(
          (stepObj) => stepObj.step
        );
        const instructionsString = instructionsArray.join(" ");

        let ingredientsSet = new Set();

        recipeData2.steps.forEach((step) => {
          step.ingredients.forEach((ingredient) => {
            ingredientsSet.add(ingredient.name);
          });
        });

        const ingredientsString = Array.from(ingredientsSet).join(", ");

        recipe = await Recipe.create({
          id: recipeData.id,
          title: recipeData.title,
          description: recipeData.summary,
          instructions: instructionsString,
          imageUrl: recipeData.image,
          tags: recipeData.diets.length > 0 ? recipeData.diets.join(", ") : "",
          ingredients: ingredientsString,
        });
      }

      const favorite = await Favorite.create({
        UserId: req.user.id,
        RecipeId: recipe.id,
      });

      res
        .status(201)
        .json({ message: "Favorite added successfully", favorite });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = FavoriteController;
