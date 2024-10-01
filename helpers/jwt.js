const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

exports.generateToken = (data) => {
    const payload = {
        email: data.email
    }
    return jwt.sign(payload, secretKey);
}

exports.verifyToken = (token) => {
    return jwt.verify(token, secretKey);
}