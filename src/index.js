import express from "express";
import { getPost, postAs, getAllPosts } from "./Posts/Post.controller";

const router = express.Router();

router.get("/myname/:id", getPost);
router.get("/myname", getAllPosts);
router.post("/myname", postAs);

// router.post("/myname", postAs);

export default router;
