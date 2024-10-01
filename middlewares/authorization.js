const { Favorite } = require("../models");

async function authorization(req,res,next){
    try{
        const recipeFound = await Recipe.findOne({});
        if (!recipeFound) throw {name:"Not Found", message:"The recipe is not found"};

        // * TODO: have to go back again later
    } catch (err){
        next(err);
    }
}

module.exports = authorization;