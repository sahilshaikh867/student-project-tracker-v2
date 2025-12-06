import prisma from "../src/config/prisma.js";
import bcrypt from "bcryptjs";

async function main() {

  // Create a mentor
  const mentor = await prisma.mentor.create({
    data: {
      name: "John Mentor",
      email: "mentor@example.com",
      password_hash: await bcrypt.hash("123456", 10)
    }
  });

  // Create a student
  const student = await prisma.student.create({
    data: {
      name: "Alice Student",
      email: "student@example.com",
      password_hash: await bcrypt.hash("123456", 10),
      mentor_id: mentor.mentor_id
    }
  });

  // Create a project
  await prisma.project.create({
    data: {
      project_title: "Demo Project",
      description: "A demo project description",
      project_domain: "Web Development",
      status: "In Progress",
      progress_percentage: 30,
      student_id: student.student_id,
      mentor_id: mentor.mentor_id
    }
  });

  console.log("✔ Seed completed!");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
