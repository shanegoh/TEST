const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign({
        'username': user.username,
        'iat': new Date().getTime(),
        'exp': new Date().getTime() + 30 * 60000},
         process.env.TOKEN_SECRET);
}

module.exports = {
    generateAccessToken
}
