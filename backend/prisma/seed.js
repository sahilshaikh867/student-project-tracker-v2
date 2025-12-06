import prisma from "../src/config/prisma.js";
import bcrypt from "bcryptjs";

async function main() {
  const password = "password123";
  const hash = await bcrypt.hash(password, 10);

  await prisma.student.create({
    data: {
      name: "Alice Student",
      email: "student@example.com",
      password_hash: hash
    }
  });

  await prisma.mentor.create({
    data: {
      name: "John Mentor",
      email: "mentor@example.com",
      password_hash: hash
    }
  });

  console.log("Seed completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
