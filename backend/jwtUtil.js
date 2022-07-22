const jwt = require('jsonwebtoken');

const generateAccessToken = (customer) => {
    return jwt.sign({
        'username': customer.username,
        'iat': new Date().getTime(),
        'exp': new Date().getTime() + 30 * 60000},
         process.env.TOKEN_SECRET);
}

module.exports = {
    generateAccessToken
}
