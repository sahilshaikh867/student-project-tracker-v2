import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthService {

  // Student Login
  static async studentLogin(email, password) {
    const student = await prisma.student.findUnique({ where: { email } });
    if (!student) return null;

    const isMatch = await bcrypt.compare(password, student.password_hash);
    if (!isMatch) return null;

    const token = jwt.sign(
      { id: student.student_id, role: "student" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return { student, token };
  }

  // Mentor Login
  static async mentorLogin(email, password) {
    const mentor = await prisma.mentor.findUnique({ where: { email } });
    if (!mentor) return null;

    const isMatch = await bcrypt.compare(password, mentor.password_hash);
    if (!isMatch) return null;

    const token = jwt.sign(
      { id: mentor.mentor_id, role: "mentor" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return { mentor, token };
  }
}

export default AuthService;
