module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define('transaction', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        wallet_id: {
            type: Sequelize.INTEGER
        },
        debit_id: {
            type: Sequelize.INTEGER
        },
        debit_currency: {
            type: Sequelize.STRING(3)
        },
        debit_amount: {
            type: Sequelize.FLOAT
        },
        credit_id: {
            type: Sequelize.INTEGER
        },
        credit_currency: {
            type: Sequelize.STRING(3)
        },
        credit_amount: {
            type: Sequelize.FLOAT
        },
        description: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATETIME
        },
        created_by: {
            type: Sequelize.STRING
        },
        updated_at: {
            type: Sequelize.DATETIME
        },
        updated_by: {
            type: Sequelize.STRING
        },
    });

    return Transaction
}

// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/