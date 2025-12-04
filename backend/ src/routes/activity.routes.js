import { Router } from "express";
import ActivityController from "../controllers/activity.controller.js";

const router = Router();

// Get all logs for a project
router.get("/project/:project_id", ActivityController.getProjectLogs);

// Create new activity log
router.post("/", ActivityController.create);

// Delete log
router.delete("/:id", ActivityController.delete);

export default router;

