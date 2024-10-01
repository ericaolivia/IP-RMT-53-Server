import { User } from "../models"; 
const bcrypt = require('bcryptjs');

class UserController{
    static async register(req,res,next){
        try{

        } catch (err){
            next(err);
        }
    }
}

module.exports = UserController;