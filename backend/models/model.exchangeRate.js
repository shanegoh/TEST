module.exports = (sequelize, Sequelize) => {
    const ExchangeRate = sequelize.define('exchange_rate', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        base_currency: {
            type: Sequelize.STRING(3),
        },
        exchange_currency: {
            type: Sequelize.STRING(3)
        },
        rate: {
            type: Sequelize.DECIMAL
        },
    });

    return Currency
}

// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/