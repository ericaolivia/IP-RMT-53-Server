const router = require("express").Router();
const userRouter = require("./userRouter");
const recipeRouter = require("./recipeRouter");
const favoriteRouter = require("./favoriteRouter");
import FavoriteController from "../controllers/FavoriteController";
import RecipeController from "../controllers/RecipeController";
import TagController from "../controllers/TagController";
const errorHandler = require("../middlewares/errorHandler");

router.use(userRouter);
router.use(recipeRouter);
router.use(favoriteRouter);
router.use(errorHandler);

module.exports = router;