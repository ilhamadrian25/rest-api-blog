import { Sequelize } from "sequelize";
const db_dialect = process.env.DIALECT;
const db_host = process.env.HOST;
const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;


const db = new Sequelize("rest-blog", "root", db_password,{
    dialect: "mysql",
    host: "localhost"
});

export default db;