-- CreateTable
CREATE TABLE "Student" (
    "student_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "mentor_id" INTEGER,
    CONSTRAINT "Student_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor" ("mentor_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mentor" (
    "mentor_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "project_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "project_domain" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "progress_percentage" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "mentor_id" INTEGER NOT NULL,
    CONSTRAINT "Project_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student" ("student_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Project_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor" ("mentor_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Task" (
    "task_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task_title" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "due_date" DATETIME,
    "project_id" INTEGER NOT NULL,
    "assigned_to_id" INTEGER NOT NULL,
    CONSTRAINT "Task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("project_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "Student" ("student_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "document_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "file_name" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "uploaded_by" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "Document_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("project_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActivityLog" (
    "log_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "ActivityLog_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("project_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_email_key" ON "Mentor"("email");
