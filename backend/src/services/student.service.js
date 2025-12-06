import prisma from "../config/prisma.js";

class StudentService {

  // Get all students
  static async getAllStudents() {
    return prisma.student.findMany({
      include: {
        mentor: true,      // FIXED
        projects: true     // VALID
      }
    });
  }

  // Get single student
  static async getStudentById(id) {
    return prisma.student.findUnique({
      where: { student_id: Number(id) },
      include: {
        mentor: true,      // FIXED
        projects: true
      }
    });
  }

  // Create new student
  static async createStudent(data) {
    return prisma.student.create({
      data
    });
  }

  // Update student
  static async updateStudent(id, data) {
    return prisma.student.update({
      where: { student_id: Number(id) },
      data
    });
  }

  // Delete student
  static async deleteStudent(id) {
    return prisma.student.delete({
      where: { student_id: Number(id) }
    });
  }
}

export default StudentService;
