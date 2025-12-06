import StudentService from "../services/student.service.js";

class StudentController {
  
  static async getAll(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      res.json(students);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch students" });
    }
  }

  static async getOne(req, res) {
    try {
      const student = await StudentService.getStudentById(req.params.id);
      if (!student) return res.status(404).json({ error: "Student not found" });
      res.json(student);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch student" });
    }
  }

  static async create(req, res) {
    try {
      const student = await StudentService.createStudent(req.body);
      res.json(student);
    } catch (err) {
      res.status(500).json({ error: "Failed to create student" });
    }
  }

  static async update(req, res) {
    try {
      const student = await StudentService.updateStudent(req.params.id, req.body);
      res.json(student);
    } catch (err) {
      res.status(500).json({ error: "Failed to update student" });
    }
  }

  static async delete(req, res) {
    try {
      await StudentService.deleteStudent(req.params.id);
      res.json({ message: "Student deleted" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete student" });
    }
  }
}

export default StudentController;

