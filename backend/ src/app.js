import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Student Project Tracker Backend Running...");
});

export default app;

