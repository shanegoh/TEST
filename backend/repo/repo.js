const db = require("../models/index.js");

const User = db.user;
const Wallet = db.wallet;
const { QueryTypes } = db.sequelize;

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

module.exports = {
  findUserByUsername,
  findAllWalletById,
  findExchangeRateByCountry,
};
