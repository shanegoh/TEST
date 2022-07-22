const { sequelize } = require("../models/index.js");
const db = require("../models/index.js");

const User = db.user;
const Wallet = db.wallet;
const Transaction = db.transaction;
const Currency = db.currency;
const ExchangeRate = db.exchangeRate;

const findUserByUsername = (username) => {
  return User.findOne({ where: { username: username } });
};

const findCurrencyFromWalletId = (id) => {
  return Currency.findAll({ where: { wallet_id: id } });
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
  return Currency.findAll({ where: { wallet_id: id } });
};

const deleteAccount = (id) => {
  return true;
  // const transaction = sequelize.transaction()
  // try {
  //     Transaction.destroy({
  //         where: { wallet_id: id },
  //         transaction: transaction
  //     })

  //     Currency.destroy({
  //         where: { wallet_id: id },
  //         transaction: transaction
  //     })

  //     Wallet.destroy({
  //         where: { id: id },
  //         transaction: transaction
  //     })

  //     transaction.commit();
  //     return true
  // } catch (error) {
  //     // transaction.rollback()
  //     return false
  // }
};

module.exports = {
  findUserByUsername,
  findAllWalletById,
  findExchangeRateByCountry,
  findAllCurrencyFromWalletId,
  deleteAccount,
  findCurrencyFromWalletId,
};
