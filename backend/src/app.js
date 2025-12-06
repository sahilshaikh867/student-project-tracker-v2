import express from "express";
import cors from "cors";

import studentRoutes from "./routes/student.routes.js";
import mentorRoutes from "./routes/mentor.routes.js";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";
import documentRoutes from "./routes/document.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// ⭐ JSON parser MUST be on top
app.use(cors());
app.use(express.json());

// ⭐ Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/mentors", mentorRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/activity", activityRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Student Project Tracker Backend Running...");
});

export default app;

