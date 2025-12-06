import prisma from "../config/prisma.js";

class ProjectService {
  
  // GET all projects
  static async getAllProjects() {
    return prisma.project.findMany({
      include: {
        student: true,
        mentor: true,
        tasks: true,
        documents: true,
        activity_logs: true     // ADDED
      }
    });
  }

  // GET single project
  static async getProjectById(id) {
    return prisma.project.findUnique({
      where: { project_id: Number(id) },
      include: {
        student: true,
        mentor: true,
        tasks: true,
        documents: true,
        activity_logs: true
      }
    });
  }

  // CREATE project (safe)
  static async createProject(data) {

    // Required fields check
    if (!data.student_id || !data.mentor_id) {
      throw new Error("student_id and mentor_id are required");
    }

    return prisma.project.create({
      data
    });
  }

  // UPDATE project
  static async updateProject(id, data) {
    return prisma.project.update({
      where: { project_id: Number(id) },
      data
    });
  }

  // DELETE project
  static async deleteProject(id) {
    return prisma.project.delete({
      where: { project_id: Number(id) }
    });
  }
}

export default ProjectService;

