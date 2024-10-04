const favoriteRouter = require("express").Router();
const FavoriteController = require("../controllers/FavoriteController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

favoriteRouter.use(authentication);
favoriteRouter.get("/favorite", FavoriteController.showFavorite);
favoriteRouter.post("/favorite/:id", FavoriteController.createFavorite);
favoriteRouter.delete("/favorite/:id", authorization, FavoriteController.deleteFavorite);

module.exports = favoriteRouter;