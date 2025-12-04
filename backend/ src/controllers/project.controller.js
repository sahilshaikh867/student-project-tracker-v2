import ProjectService from "../services/project.service.js";

class ProjectController {

  static async getAll(req, res) {
    try {
      const projects = await ProjectService.getAllProjects();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  }

  static async getOne(req, res) {
    try {
      const project = await ProjectService.getProjectById(req.params.id);
      if (!project) return res.status(404).json({ error: "Project not found" });
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch project" });
    }
  }

  static async create(req, res) {
    try {
      const project = await ProjectService.createProject(req.body);
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: "Failed to create project" });
    }
  }

  static async update(req, res) {
    try {
      const project = await ProjectService.updateProject(req.params.id, req.body);
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: "Failed to update project" });
    }
  }

  static async delete(req, res) {
    try {
      await ProjectService.deleteProject(req.params.id);
      res.json({ message: "Project deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  }
}

export default ProjectController;

