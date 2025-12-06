import express from "express";
import cors from "cors";

// ROUTES IMPORT
import studentRoutes from "./routes/student.routes.js";
import mentorRoutes from "./routes/mentor.routes.js";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";
import documentRoutes from "./routes/document.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// ⭐ VERY IMPORTANT — yaha hona chahiye express.json()
app.use(cors());
app.use(express.json());  // <-- MUST BE AT THE TOP BEFORE ANY ROUTES

// ROUTES
app.use("/api/students", studentRoutes);
app.use("/api/mentors", mentorRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/auth", authRoutes);

// TEST ENDPOINT
app.get("/", (req, res) => {
  res.send("Student Project Tracker Backend Running...");
});

export default app;

