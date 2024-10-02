const axios = require('axios');

class RecipeController{
    static async showRecipes(req,res,next){
        try{
            // * TODO: nanti perlu nyalain ini
            // const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            //     params: {
            //       addRecipeNutrition: true,
            //       apiKey: process.env.SPOONACULAR_API_KEY,
            //       offset: req.query.offset || 0,  
            //       number: req.query.number || 10,
            //       query: req.query.query
            //     }
            //   });
        
            //   const recipes = response.data;
            //   res.status(200).json(recipes);
            // * TODO: sementara langsung ambil dari json, ntar perlu tembak api asli
            // ! Keep in mind, paginationnya ga bakalan jalan
            const recipes = require('../datas/complexSearch.json');
            res.status(200).json(recipes);
        } catch (err){
            next(err);
        }
    }
}

module.exports = RecipeController;