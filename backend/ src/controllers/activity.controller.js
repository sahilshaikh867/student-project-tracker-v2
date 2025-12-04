import ActivityService from "../services/activity.service.js";

class ActivityController {

  static async getProjectLogs(req, res) {
    try {
      const logs = await ActivityService.getLogsByProject(req.params.project_id);
      res.json(logs);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch activity logs" });
    }
  }

  static async create(req, res) {
    try {
      const log = await ActivityService.createLog(req.body);
      res.json(log);
    } catch (err) {
      res.status(500).json({ error: "Failed to create activity log" });
    }
  }

  static async delete(req, res) {
    try {
      await ActivityService.deleteLog(req.params.id);
      res.json({ message: "Activity log deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete activity log" });
    }
  }
}

export default ActivityController;

