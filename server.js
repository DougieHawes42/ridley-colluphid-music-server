import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
