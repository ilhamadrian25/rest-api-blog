import { DataTypes } from "sequelize";
import db from "../config/db.js";

const UserModel = db.define('user', {
    username: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,
    },
    profile: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

await UserModel.sync({force: false});
console.log("The table for the User model was just (re)created!");

export default UserModel;