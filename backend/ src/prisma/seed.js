import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // -----------------------
  // Create Mentors
  // -----------------------
  const mentor1 = await prisma.mentor.create({
    data: {
      name: "Dr. Amit Sharma",
      email: "amit.sharma@university.com",
      password_hash: "hashedpassword1",
      department: "Computer Science",
      designation: "Professor"
    }
  });

  const mentor2 = await prisma.mentor.create({
    data: {
      name: "Prof. Neha Gupta",
      email: "neha.gupta@university.com",
      password_hash: "hashedpassword2",
      department: "IT",
      designation: "Assistant Professor"
    }
  });

  // -----------------------
  // Create Students
  // -----------------------
  const student1 = await prisma.student.create({
    data: {
      name: "Sahil Khan",
      email: "sahil@student.com",
      password_hash: "studentpass1",
      department: "Computer Science",
      year: 3,
      assigned_mentor_id: mentor1.mentor_id
    }
  });

  const student2 = await prisma.student.create({
    data: {
      name: "Rohit Patil",
      email: "rohit@student.com",
      password_hash: "studentpass2",
      department: "IT",
      year: 2,
      assigned_mentor_id: mentor2.mentor_id
    }
  });

  const student3 = await prisma.student.create({
    data: {
      name: "Ayesha Shaikh",
      email: "ayesha@student.com",
      password_hash: "studentpass3",
      department: "Computer Science",
      year: 4,
      assigned_mentor_id: mentor1.mentor_id
    }
  });

  // -----------------------
  // Create Projects
  // -----------------------
  const project1 = await prisma.project.create({
    data: {
      project_title: "AI Based Student Tracker",
      description: "Tracks student progress using AI.",
      project_domain: "AI/ML",
      student_id: student1.student_id,
      mentor_id: mentor1.mentor_id,
      status: "In Progress",
      progress_percentage: 40
    }
  });

  const project2 = await prisma.project.create({
    data: {
      project_title: "Cloud Expense Analyzer",
      description: "Analyzes cloud billing usage.",
      project_domain: "Cloud Computing",
      student_id: student2.student_id,
      mentor_id: mentor2.mentor_id,
      status: "Not Started",
      progress_percentage: 0
    }
  });

  // -----------------------
  // Create Tasks
  // -----------------------
  await prisma.task.createMany({
    data: [
      {
        task_title: "Build UI Mockups",
        task_description: "Create UI for dashboard",
        project_id: project1.project_id,
        assigned_to_id: student1.student_id,
        status: "Completed"
      },
      {
        task_title: "Setup Node Backend",
        task_description: "Initialize Express + Prisma",
        project_id: project1.project_id,
        assigned_to_id: student1.student_id,
        status: "In Progress"
      },
      {
        task_title: "Research AWS Services",
        task_description: "List AWS resources for the project",
        project_id: project2.project_id,
        assigned_to_id: student2.student_id,
        status: "Pending"
      }
    ]
  });

  // -----------------------
  // Activity Logs
  // -----------------------
  await prisma.activityLog.create({
    data: {
      action: "Student created Project: AI Based Student Tracker",
      project_id: project1.project_id,
      performed_by: student1.student_id
    }
  });

  console.log("🌱 Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
