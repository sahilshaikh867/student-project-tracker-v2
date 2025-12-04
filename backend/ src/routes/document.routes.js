import { Router } from "express";
import multer from "multer";
import DocumentController from "../controllers/document.controller.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), DocumentController.upload);
router.get("/project/:project_id", DocumentController.getAll);
router.delete("/:id", DocumentController.delete);

export default router;

