const Sequelize = require("sequelize");
require("dotenv").config();

//create sequelize object, look for process.env.JAWSDB_URL
const sequelize = process.env.JAWSDB_URL
  ? new sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;
