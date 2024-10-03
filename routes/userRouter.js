const userRouter = require("express").Router();
const UserController =  require("../controllers/UserController");
const authentication = require("../middlewares/authentication");

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
userRouter.post("/login/google", UserController.googleLogin);
userRouter.use(authentication);
userRouter.get("/profile", UserController.getUserById);
userRouter.put("/profile/:id", UserController.updateProfile);

module.exports = userRouter;