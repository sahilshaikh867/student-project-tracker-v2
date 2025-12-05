import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

router.post("/student/login", AuthController.studentLogin);
router.post("/mentor/login", AuthController.mentorLogin);

export default router;
