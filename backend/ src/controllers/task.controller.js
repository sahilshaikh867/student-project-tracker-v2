import TaskService from "../services/task.service.js";

class TaskController {

  static async getAll(req, res) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch tasks" });
    }
  }

  static async getOne(req, res) {
    try {
      const task = await TaskService.getTaskById(req.params.id);
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch task" });
    }
  }

  static async create(req, res) {
    try {
      const task = await TaskService.createTask(req.body);
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: "Failed to create task" });
    }
  }

  static async update(req, res) {
    try {
      const task = await TaskService.updateTask(req.params.id, req.body);
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: "Failed to update task" });
    }
  }

  static async delete(req, res) {
    try {
      await TaskService.deleteTask(req.params.id);
      res.json({ message: "Task deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete task" });
    }
  }
}

export default TaskController;

