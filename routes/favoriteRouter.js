const favoriteRouter = require("express").Router();
const FavoriteController = require("../controllers/FavoriteController");
const authentication = require("../middlewares/authentication");

favoriteRouter.use(authentication);
favoriteRouter.post("/favorite/:id", FavoriteController.createFavorite);

module.exports = favoriteRouter;