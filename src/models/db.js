// crear una base de datos utilizando sequalize y mysql2
const { Sequelize } = require("sequelize");

const db = new Sequelize("tp2_prog", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

module.exports = db;
