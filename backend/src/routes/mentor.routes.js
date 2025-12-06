import { Router } from "express";
import MentorController from "../controllers/mentor.controller.js";

const router = Router();

router.get("/", MentorController.getAll);
router.get("/:id", MentorController.getOne);
router.post("/", MentorController.create);
router.put("/:id", MentorController.update);
router.delete("/:id", MentorController.delete);

export default router;

