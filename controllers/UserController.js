const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    const { name, email, password } = req.body;
    try {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      const newUserPasswordless = await User.findOne({
        where: { id: newUser.id },
        attributes: { exclude: ["password"] },
      });
      return res.status(201).json(newUserPasswordless);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      // we need to validate because the validation that we created is only for before creation
      if (!email)
        throw { name: "Bad Request", message: "Please enter your email" };
      if (!password)
        throw { name: "Bad Request", message: "Please enter your password" };

      const userFound = await User.findOne({ where: {email} });
      if (!userFound)
        throw { name: "Unauthorized", message: "Invalid email address" };

      const isPasswordCorrect = await bcrypt.compare(
        password,
        userFound.password
      );
      if (!isPasswordCorrect)
        throw { name: "Unauthorized", message: "Invalid password" };

      const access_token = generateToken(userFound);
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
