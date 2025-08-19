import express from "express";

const router = express.Router();

// Example route for testing
router.get("/", (req, res) => {
  res.json({ message: "Blueprint API is working 🚀" });
});

export default router;
