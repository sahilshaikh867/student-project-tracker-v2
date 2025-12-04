import prisma from "../config/prisma.js";

class DocumentService {

  // Fetch all documents for a project
  static async getDocumentsByProject(project_id) {
    return prisma.document.findMany({
      where: { project_id: Number(project_id) }
    });
  }

  // Create new document entry
  static async createDocument(data) {
    return prisma.document.create({
      data
    });
  }

  // Delete document entry
  static async deleteDocument(id) {
    return prisma.document.delete({
      where: { document_id: Number(id) }
    });
  }
}

export default DocumentService;

