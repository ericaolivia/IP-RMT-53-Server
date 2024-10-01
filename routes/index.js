const router = require("express").Router();
const userRouter = require("./userRouter");
const recipeRouter = require("./recipeRouter");
const favoriteRouter = require("./favoriteRouter");
const errorHandler = require("../middlewares/errorHandler");

router.use(userRouter);
router.use(recipeRouter);
router.use(favoriteRouter);
router.use(errorHandler);

module.exports = router;