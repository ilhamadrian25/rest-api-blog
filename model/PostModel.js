import { DataTypes } from "sequelize";
import db from "../config/db.js";
import UserModel from "./UserModel.js";

const PostModel = db.define('post', {
    title: {
        type: DataTypes.STRING,
    },
    thumbnail : {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: UserModel,
    //         key: "id"
    //     }
    // }
},{
    freezeTableName: true
});

UserModel.hasMany(PostModel, {foreignKey: "userId"});
PostModel.belongsTo(UserModel, {foreignKey: "userId"});

await PostModel.sync({force: false});
console.log("The table for the User model was just (re)created!");

export default PostModel;