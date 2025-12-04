import prisma from "../config/prisma.js";

class ActivityService {
  
  // Get all logs for a project
  static async getLogsByProject(project_id) {
    return prisma.activityLog.findMany({
      where: { project_id: Number(project_id) },
      orderBy: {
        timestamp: "desc"
      }
    });
  }

  // Create new log entry
  static async createLog(data) {
    return prisma.activityLog.create({
      data
    });
  }

  // Delete a log (optional)
  static async deleteLog(id) {
    return prisma.activityLog.delete({
      where: { log_id: Number(id) }
    });
  }
}

export default ActivityService;

