import prisma from "../config/prisma.js";

class TaskService {
  
  // Get all tasks
  static async getAllTasks() {
    return prisma.task.findMany({
      include: {
        project: true,
        assigned_to: true,
      }
    });
  }

  // Get single task
  static async getTaskById(id) {
    return prisma.task.findUnique({
      where: { task_id: Number(id) },
      include: {
        project: true,
        assigned_to: true,
      }
    });
  }

  // Create a new task
  static async createTask(data) {
    return prisma.task.create({
      data
    });
  }

  // Update a task
  static async updateTask(id, data) {
    return prisma.task.update({
      where: { task_id: Number(id) },
      data
    });
  }

  // Delete a task
  static async deleteTask(id) {
    return prisma.task.delete({
      where: { task_id: Number(id) }
    });
  }
}

export default TaskService;

