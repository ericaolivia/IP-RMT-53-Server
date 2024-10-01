const User = require("../models");
const bcrypt = require('bcryptjs');

class UserController{
    static async register(req,res,next){
        const { name, email, password } = req.body;
        try{
            const newUser = User.create({
                name,
                email,
                password,
                role: 'admin'
            })
            const newUserPasswordless = await User.findOne({
                where: {id: newUser.id},
                attributes: {exclude: ['password']}
              });
              return res.status(201).json(newUserPasswordless);
        } catch (err){
            next(err);
        }
    }
}

module.exports = UserController;