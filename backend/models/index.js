const { Sequelize, Op } = require("sequelize");
const dbConfig = require("../db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    define: {
        freezeTableName: true,
        timestamps: false,
    },
});

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize
db.op = Op
db.user = require("./model.user.js")(sequelize, Sequelize)
db.wallet = require("./model.wallet.js")(sequelize, Sequelize)
// db.transaction = require("./model.transaction.js")(sequelize, Sequelize)
// db.multicurrency = require("./model.multicurrency.js")(sequelize, Sequelize)
// db.exchangeRate = require("./model.exchangeRate.js")(sequelize, Sequelize)
// db.currency = require("./model.currency.js")(sequelize, Sequelize)
// https://sequelize.org/docs/v6/core-concepts/model-basics/

// https://sequelize.org/docs/v6/core-concepts/assocs/

module.exports = db;