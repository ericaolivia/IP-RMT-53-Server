const axios = require("axios");
const { Recipe } = require("../models");

class RecipeController {
  static async showRecipes(req, res, next) {
    try {
      // * TODO: nanti perlu nyalain ini
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            addRecipeNutrition: true,
            apiKey: process.env.SPOONACULAR_API_KEY,
            offset: req.query.offset || 0,
            number: req.query.number || 10,
            query: req.query.query
          },
          headers: {
            Authorization: `Bearer ${req.headers.authorization}`  
          }
        });

        const recipes = response.data;
        res.status(200).json(recipes);
      // * TODO: sementara langsung ambil dari json, ntar perlu tembak api asli
      // ! Keep in mind, paginationnya ga bakalan jalan
      // const recipes = require("../datas/complexSearch.json");
      // res.status(200).json(recipes);
    } catch (err) {
      next(err);
    }
  }

  static async showRecipeDetail(req, res, next) {
    const { id } = req.params;
    try {
      let recipeFound = await Recipe.findByPk(id);
      if (!recipeFound) {
        const apiResponse = await axios({
          method: "get",
          url: `https://api.spoonacular.com/recipes/${id}/information`,
          params: {
            includeNutrition: true,
            apiKey: process.env.SPOONACULAR_API_KEY,
          }
        });
        const recipeData = apiResponse.data;
        console.log(recipeData);

        // const apiResponse2 = await axios({
        //   method: "get",
        //   url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
        //   params: {
        //     apiKey: process.env.SPOONACULAR_API_KEY,
        //   },
        // });

        // const recipeData2 = apiResponse2.data;
        // console.log(recipeData2);

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

        recipeFound = {
          id: recipeData.id, 
          title: recipeData.title, 
          description: recipeData.summary, 
          // instructions: instructionsString, 
          imageUrl: recipeData.image, 
          tags:recipeData.diets.length > 0 ? recipeData.diets.join(', ') : "",
          // ingredients:ingredientsString
        }
      }
      console.log(recipeFound);
      res.status(200).json(recipeFound);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RecipeController;
