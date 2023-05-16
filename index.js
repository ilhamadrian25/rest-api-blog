import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import route from "./routes/index.js";

dotenv.config({path: "./.env"});

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

try {
    db.authenticate();
    console.log('Database has connected');
} catch (error) {
    console.log('Unable to connect Database');
}

app.use(route);