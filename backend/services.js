const { findUserByUsername, findAllWalletById, findAllCurrencyFromWalletId, findExchangeRateByCountry, deleteAccount, findCurrencyFromWalletId } = require("./repo/repo.js");

const getUserByUsername = (username) => {
    return findUserByUsername(username)
        .then((user) => {
            if (!user) {
                console.log("No user " + user + " exist.");
            } else {
                return user;
            }
        })
        .catch(function (err) {
            return err;
        });
};

const getCurrencyFromWalletId = (id) => {
    return findCurrencyFromWalletId(id)
        .then((currencyList) => {
            console.log(currencyList)
            return currencyList
        })
        .catch((err) => {
            return err
        })
}

const getAllWalletById = (id) => {
    return findAllWalletById(id)
        .then((wallets) => {
            console.log(wallets);
            return wallets;
        })
        .catch(function (err) {
            return err;
        });
};

const getExchangeRateByCountry = (currency) => {
    return findExchangeRateByCountry(currency)
        .then((ExchangeRate) => {
            console.log(ExchangeRate);
            return ExchangeRate;
        })
        .catch(function (err) {
            return err;
        });
};

const getAllCurrencyFromWalletId = (id) => {
    return findAllCurrencyFromWalletId(id)
        .then((currencyList) => {
            console.log(currencyList)
            return currencyList
        })
        .catch(function (err) {
            return err
        });
};

const closeAccount = (id) => {
    return deleteAccount(id).then((isDeleted) => {
        if (isDeleted === true) {
            return true
        } else {
            return false
        }
    })
        .catch((err) => {
            return err
        })
};

module.exports = {
    getUserByUsername,
    getAllWalletById,
    getExchangeRateByCountry,
    getAllCurrencyFromWalletId,
    closeAccount,
    getCurrencyFromWalletId
};
