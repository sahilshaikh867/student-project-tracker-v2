import s3 from "../utils/s3.js";
import DocumentService from "../services/document.service.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

class DocumentController {

  static async upload(req, res) {
    try {
      const { project_id, uploaded_by } = req.body;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const fileKey = `documents/${uuidv4()}-${file.originalname}`;

      const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: fileKey,
        Body: fs.readFileSync(file.path),
        ContentType: file.mimetype
      };

      // Upload to S3
      const uploadResponse = await s3.upload(params).promise();

      // Save to DB
      const document = await DocumentService.createDocument({
        project_id: Number(project_id),
        file_name: file.originalname,
        file_url: uploadResponse.Location,
        uploaded_by: Number(uploaded_by)
      });

      // Remove file from server
      fs.unlinkSync(file.path);

      res.json({
        message: "File uploaded successfully",
        document
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "File upload failed" });
    }
  }

  static async getAll(req, res) {
    try {
      const docs = await DocumentService.getDocumentsByProject(req.params.project_id);
      res.json(docs);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch documents" });
    }
  }

  static async delete(req, res) {
    try {
      await DocumentService.deleteDocument(req.params.id);
      res.json({ message: "Document deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete document" });
    }
  }
}

export default DocumentController;

