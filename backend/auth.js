const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { generateAccessToken } = require('./jwtUtil');
const { getUserByUsername } = require('./services.js')

const hashPwd = (password) => {
    return bcrypt.hash(password, 10)
}

// Password authentication
const authenticate = (user_payload) => {
    return getUserByUsername(user_payload.username)
        .then((user) => {
            if (!user) {
                console.log("Invalid user.")
            } else {
                if (bcrypt.compareSync(user_payload.password, user.password)) {
                    return generateAccessToken(user)
                } else {
                    console.log("Invalid password.")
                }
            }
        })
}


// Middle ware for checking jwt verification
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]

    if (token === null)
        return res.status(401).send({ 'message': 'No access token provided' })

    jwt.verify(token, process.env.TOKEN_SECRET, (err, claims) => {
        if (err)
            return res.sendStatus(403)

        req.username = claims['username']
        next()
    })
}

// Middle ware for checking manager role
const verify_manager_role = (req, res, next) => {
    if (req.role === 1)
        next()
    else
        return res.status(401).send({ 'message': 'Access Denied' })
}

// Middle ware for checking staff role
const verify_staff_role = (req, res, next) => {
    if (req.role === 0)
        next()
    else
        return res.status(401).send({ 'message': 'Access Denied' })
}

module.exports = {
    authenticateToken,
    authenticate,
    verify_manager_role,
    verify_staff_role,
    hashPwd
}