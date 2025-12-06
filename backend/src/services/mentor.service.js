import prisma from "../config/prisma.js";

class MentorService {

  // Get all mentors
  static async getAllMentors() {
    return prisma.mentor.findMany({
      include: {
        students: true,
        projects: true
      }
    });
  }

  // Get a single mentor
  static async getMentorById(id) {
    return prisma.mentor.findUnique({
      where: { mentor_id: Number(id) },
      include: {
        students: true,
        projects: true
      }
    });
  }

  // Create new mentor
  static async createMentor(data) {
    return prisma.mentor.create({
      data
    });
  }

  // Update mentor
  static async updateMentor(id, data) {
    return prisma.mentor.update({
      where: { mentor_id: Number(id) },
      data
    });
  }

  // Delete mentor
  static async deleteMentor(id) {
    return prisma.mentor.delete({
      where: { mentor_id: Number(id) }
    });
  }
}

export default MentorService;

