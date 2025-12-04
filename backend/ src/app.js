import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student.routes.js";
import mentorRoutes from "./routes/mentor.routes.js";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";
import documentRoutes from "./routes/document.routes.js";



const app = express();

app.use(cors());
app.use("/api/students", studentRoutes);
app.use(express.json());
app.use("/api/mentors", mentorRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/documents", documentRoutes);


// Health check endpoint
app.get("/", (req, res) => {
  res.send("Student Project Tracker Backend Running...");
});

export default app;

