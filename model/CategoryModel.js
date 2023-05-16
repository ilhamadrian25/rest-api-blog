import { DataTypes } from "sequelize";
import db from "../config/db.js";

const CategoryModel = db.define('category', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
    }
});