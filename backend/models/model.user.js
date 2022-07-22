module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(60),
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING
        },
    });

    return User
}

// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/