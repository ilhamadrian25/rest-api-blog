import express from "express";
import { getAllPost, getPostByUser } from "../controllers/PostControllers.js";
import { checkApiKey } from "../middleware/ApiKey.js";
// import checkApiKey from "../middleware/CheckApiKey.js";
// import { checkApiKey } from "../middleware/CheckApiKey.js";

const post = express.Router()

post.get('/post', getAllPost);
post.get('/post-user/:username',checkApiKey ,  getPostByUser);

export default post;
