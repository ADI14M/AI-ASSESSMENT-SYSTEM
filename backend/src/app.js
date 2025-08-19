import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import blueprintRoutes from "./routes/blueprintRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import evaluationRoutes from "./routes/evaluationRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/blueprint", blueprintRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/evaluation", evaluationRoutes);

export default app;
