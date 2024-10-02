const userRouter = require("express").Router();
const UserController =  require("../controllers/UserController");

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
userRouter.post("/login/google", UserController.googleLogin);

module.exports = userRouter;