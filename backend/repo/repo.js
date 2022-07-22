const db = require('../models/index.js')

const User = db.user
const Wallet = db.wallet
const { QueryTypes } = db.sequelize

const findUserByUsername = (username) => {
    return User.findOne({ where: { username: username } })
};

const findAllWalletById = (id) => {
    return Wallet.findAll({ where: { user_id: id } })
};

module.exports = {
    findUserByUsername,
    findAllWalletById
}
