const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

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
      if (!email) throw { name: "Bad Request", message: "Email is required" };
      if (!password)
        throw { name: "Bad Request", message: "Password is required" };

      const userFound = await User.findOne({ where: { email } });
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
      next();
    } catch (err) {
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      console.log(req.headers);
      const ticket = await client.verifyIdToken({
        idToken: req.headers.google_token,
        audience: process.env.G_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      let user = await User.findOne({ where: { email: payload.email } });
      if (!user) {
        user = await User.create(
          {
            name: payload.name,
            email: payload.email,
            password: String(Math.floor(Math.random() * 1e12)),
            imageUrl: payload.picture,
          },
          {
            hooks: false,
          }
        );
      }

      const access_token = generateToken(user);
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }

  static async getUserById(req, res, next) {
    // const {id} = req.params;
    try {
      const userFound = await User.findOne({
        where: { id: req.user.id },
        attributes: ["id", "name", "imageUrl"],
      });
      res.status(200).json(userFound);
    } catch (err) {
      next(err);
    }
  }

  static async updateProfile(req, res, next) {
    // const { id } = req.params;
    const { name, imageUrl } = req.body;
    try {
      await User.update(
        {
          name,
          imageUrl,
        },
        {
          where: {
            id: req.user.id,
          },
        }
      );
      res.status(200).json({ message: "Successfully update the profile" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
