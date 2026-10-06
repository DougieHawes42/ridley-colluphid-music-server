import express from "express";

const router = express.Router();

import {
  signupUser,
  signinUser,
  getCurrentUser,
} from "../controllers/userControllers.js";

router.get("/me", getCurrentUser);
router.post("/signup", signupUser);
router.post("/signin", signinUser);

export default router;
