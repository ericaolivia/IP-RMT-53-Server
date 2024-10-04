const { Favorite } = require("../models");

async function authorization(req, res, next) {
//   const {id} = req.params;
  try {
    let favoriteId = parseInt(req.params.id, 10);
    const userId = req.user.id;
    console.log('FavoriteId:', favoriteId, 'UserId:', userId);
    const favorite = await Favorite.findOne({
        where:{
            RecipeId: favoriteId, 
            UserId: userId,
        }
    });
    if (!favorite) {
      return res
        .status(404)
        .json({ name: "Not Found", message: "Favorite not found" });
    }
    if (favorite.UserId !== userId) {
      return res
        .status(403)
        .json({ name : "Forbidden Error", message: "You are not authorized to perform this action" });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authorization;
