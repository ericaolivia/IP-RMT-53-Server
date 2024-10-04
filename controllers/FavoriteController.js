const axios = require("axios");
const { Recipe, Favorite } = require("../models");

class FavoriteController {
  static async showFavorite(req,res,next){
    try{
    const userId = req.user.id; 

    const favorites = await Favorite.findAll({
      where: { UserId: userId }, 
      include: [Recipe] 
    });

    res.status(200).json(favorites);
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

        // const apiResponse2 = await axios({
        //   method: "get",
        //   url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
        //   params: {
        //     apiKey: process.env.SPOONACULAR_API_KEY,
        //   },
        // });

        // const recipeData2 = apiResponse2.data;

        // const instructionsArray = recipeData2.steps.map(
        //   (stepObj) => stepObj.step
        // );
        // const instructionsString = instructionsArray.join(" ");

        // let ingredientsSet = new Set();

        // recipeData2.steps.forEach((step) => {
        //   step.ingredients.forEach((ingredient) => {
        //     ingredientsSet.add(ingredient.name);
        //   });
        // });

        // const ingredientsString = Array.from(ingredientsSet).join(", ");

        recipe = await Recipe.create({
          id: recipeData.id,
          title: recipeData.title,
          description: recipeData.summary,
          instructions: "Instructions coming soon",
          imageUrl: recipeData.image,
          tags: recipeData.diets.length > 0 ? recipeData.diets.join(", ") : "",
          ingredients: "Ingredients coming soon",
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

  static async deleteFavorite(req,res,next){
    const {id} = req.params;
    try{
      const result = await Favorite.destroy({
        where: {
          RecipeId:id,
          UserId: req.user.id, 
        }
      })
      if (result === 0) {
        return res.status(404).json({ name: "Not Found", message: 'Favorite not found' });
      }
      res.status(200).json({message: 'Successfully delete recipe from favorites'});
    } catch (err){
      next(err);
    }
  }
}

module.exports = FavoriteController;
