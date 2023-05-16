import express from "express";
import PostRoute from "./PostRoutes.js"
const route = express();

route.use(PostRoute);

export default route;