import { Sequelize } from "sequelize";

const sequelize = new Sequelize("loginTest", "username", "password", {
    host: "localhost",
    dialect: "mssql",
});

exports.default = sequelize;