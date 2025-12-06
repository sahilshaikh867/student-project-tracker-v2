import { Router } from "express";
import StudentController from "../controllers/student.controller.js";

const router = Router();

router.get("/", StudentController.getAll);
router.get("/:id", StudentController.getOne);
router.post("/", StudentController.create);
router.put("/:id", StudentController.update);
router.delete("/:id", StudentController.delete);

export default router;

