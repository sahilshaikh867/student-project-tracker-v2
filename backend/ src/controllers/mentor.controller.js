import MentorService from "../services/mentor.service.js";

class MentorController {

  static async getAll(req, res) {
    try {
      const mentors = await MentorService.getAllMentors();
      res.json(mentors);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch mentors" });
    }
  }

  static async getOne(req, res) {
    try {
      const mentor = await MentorService.getMentorById(req.params.id);
      if (!mentor) return res.status(404).json({ error: "Mentor not found" });
      res.json(mentor);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch mentor" });
    }
  }

  static async create(req, res) {
    try {
      const mentor = await MentorService.createMentor(req.body);
      res.json(mentor);
    } catch (err) {
      res.status(500).json({ error: "Failed to create mentor" });
    }
  }

  static async update(req, res) {
    try {
      const mentor = await MentorService.updateMentor(req.params.id, req.body);
      res.json(mentor);
    } catch (err) {
      res.status(500).json({ error: "Failed to update mentor" });
    }
  }

  static async delete(req, res) {
    try {
      await MentorService.deleteMentor(req.params.id);
      res.json({ message: "Mentor deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete mentor" });
    }
  }
}

export default MentorController;

