const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req,res,next){
    try {
        const access_token = req.headers.authorization;
        if(!access_token || access_token.split(" ").length != 2) throw {name: 'Unauthenticated', message: 'Access token required'};

        const[bearer, token] = access_token.split(" ");
        if(bearer != 'Bearer') throw {name:'Unauthorized', message: 'Invalid token'};
        const payload = verifyToken(token);
        const userFound = await User.findOne({where: {email: payload.email}});
        if (!userFound) throw {name: 'Forbidden Error', message:'You are forbidden'};
        req.user = {
            id: userFound.id,
            role: userFound.role
        }
        next();
    } catch (err){
        next(err);
    }
}

module.exports = authentication;