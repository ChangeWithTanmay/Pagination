import express from "express";
import { creatPost, posts } from "../controller/post.controller.js";

const route = express.Router();

route.post("/create", creatPost);

route.get('/posts', posts)

export default route;