import { Sequelize } from "sequelize";
import {sequelize} from "../database.js";

const User = sequelize.define("User", {       // "User" is the name of the table

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = User;