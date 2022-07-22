module.exports = (sequelize, Sequelize) => {
    const Wallet = sequelize.define('wallet', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
    });

    return Wallet
}

// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/