import prisma from "../config/prisma.js";

class ProjectService {
  
  // GET all projects
  static async getAllProjects() {
    return prisma.project.findMany({
      include: {
        student: true,
        mentor: true,
        tasks: true,
        documents: true
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

  // CREATE project
  static async createProject(data) {
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

