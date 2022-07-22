const { findUserByUsername } = require('./repo/user.js')

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

module.exports = {
    getUserByUsername
}