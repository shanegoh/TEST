const db = require('../models/index.js')

const User = db.user
const { QueryTypes } = db.sequelize
// User Repo

const findUserByUsername = (username) => {
    return User.findOne({ where: { username: username } })
};
module.exports = {
    findUserByUsername
}
