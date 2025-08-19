import express from "express";

const router = express.Router();

// Sample route
router.get("/", (req, res) => {
  res.json({ message: "Evaluation API working ✅" });
});

export default router;
