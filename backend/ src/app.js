import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student.routes.js";

const app = express();

app.use(cors());
app.use("/api/students", studentRoutes);
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Student Project Tracker Backend Running...");
});

export default app;

