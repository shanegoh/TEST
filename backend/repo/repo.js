const db = require("../models/index.js");

const User = db.user;
const Wallet = db.wallet;

const findUserByUsername = (username) => {
    return User.findOne({ where: { username: username } });
};

const findAllWalletById = (id) => {
    return Wallet.findAll({ where: { user_id: id } });
};

const findExchangeRateByCountry = (exchangeCurrency) => {
    return ExchangeRate.findAll({
        where: { exchange_currency: exchangeCurrency },
    });
};

const findAllCurrencyFromWalletId = (id) => {
    return Currency.findAll({ where: { wallet_id: id } })
};

module.exports = {
    findUserByUsername,
    findAllWalletById,
    findExchangeRateByCountry,
    findAllCurrencyFromWalletId
};
