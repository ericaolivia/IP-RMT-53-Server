const favoriteRouter = require("express").Router();
const FavoriteController = require("../controllers/FavoriteController");
const authentication = require("../middlewares/authentication");

favoriteRouter.use(authentication);
favoriteRouter.get("/favorite/:id", FavoriteController.showFavorite);
favoriteRouter.post("/favorite/:id", FavoriteController.createFavorite);

module.exports = favoriteRouter;