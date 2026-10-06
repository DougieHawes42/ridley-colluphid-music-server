import express from "express";

import { protect } from "../middleware/auth.js";

import { getBlogs, createBlog } from "../controllers/blogControllers.js";

const router = express.Router();

router.get("/blog", getBlogs);
router.post("/blog", protect, createBlog);

export default router;
