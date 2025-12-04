import app from "./app.js";
import prisma from "./config/prisma.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Test DB connection
    await prisma.$connect();
    console.log("📦 Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    process.exit(1);
  }
}

startServer();

