const { findUserByUsername, findAllWalletById, findAllCurrencyFromWalletId } = require('./repo/repo.js')

const getUserByUsername = (username) => {
    return findUserByUsername(username)
        .then(user => {
            if (!user) {
                console.log('No user ' + user + ' exist.');
            } else {
                return user
            }
        })
        .catch(function (err) {
            return err
        });
};

const getAllWalletById = (id) => {
    return findAllWalletById(id)
        .then((wallets) => {
            console.log(wallets)
            return wallets
        })
        .catch(function (err) {
            return err
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

module.exports = {
    getUserByUsername,
    getAllWalletById,
    getAllCurrencyFromWalletId
}