const router = require("express").Router();
import UserController from "../controllers/UserController";
import FavoriteController from "../controllers/FavoriteController";
import RecipeController from "../controllers/RecipeController";
import TagController from "../controllers/TagController";
const errorHandler = require("../middlewares/errorHandler");

router.use(errorHandler);


module.exports = router;