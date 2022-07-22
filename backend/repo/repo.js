const db = require('../models/index.js')

const User = db.user
const Wallet = db.wallet
const Currency = db.currency

const findUserByUsername = (username) => {
    return User.findOne({ where: { username: username } })
};

const findAllWalletById = (id) => {
    return Wallet.findAll({ where: { user_id: id } })
};

const findAllCurrencyFromWalletId = (id) => {
    return Currency.findAll({ where: { wallet_id: id } })
};

module.exports = {
    findUserByUsername,
    findAllWalletById,
    findAllCurrencyFromWalletId
}
