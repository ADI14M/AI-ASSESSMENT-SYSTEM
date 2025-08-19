import express from "express";
import { createTest, getTests } from "../controllers/testController.js";

const router = express.Router();

router.post("/", createTest);
router.get("/", getTests);

export default router;
