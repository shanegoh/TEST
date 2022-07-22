module.exports = (sequelize, Sequelize) => {
    const Currency = sequelize.define('currency', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        wallet_id: {
            type: Sequelize.INTEGER,
        },
        currency: {
            type: Sequelize.STRING(3)
        },
        amount: {
            type: Sequelize.FLOAT
        },
    });

    return Currency
}

// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/