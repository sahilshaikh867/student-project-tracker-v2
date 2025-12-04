# Student Project Tracker
---

* **Project name:** Student Project Tracker
* **Code:** will be on **GitHub**
* **Goal:** Use this project to practice **DevOps** with
---
  * AWS: **EC2, RDS, S3** (and we can add more later if needed)
  * **Terraform** (IaC)
  * **Jenkins** (CI/CD)
  * **Kubernetes** (deployment/orchestration)
---

### Students can track their project progress.

### Mentors/Faculty can monitor and update status.

---

# ✅ **1. User Types**

Your system will have two main user roles:

### **A) Student**

Fields (basic + useful for DevOps/demo app):

* `student_id`
* `name`
* `email`
* `password_hash`
* `department`
* `year`
* `assigned_mentor_id`
* `created_at`
* `updated_at`

### **B) Mentor / Faculty**

Fields:

* `mentor_id`
* `name`
* `email`
* `password_hash`
* `department`
* `designation`
* `created_at`
* `updated_at`

Later you can add an **Admin** role if needed.

---

# ✅ **2. Project Entity**

Every student (or team of students) will have a project.

### **Project Fields:**

* `project_id`
* `project_title`
* `description`
* `project_domain`
  (AI, ML, IoT, Web Dev, Cloud, Cybersecurity, etc.)
* `student_id` (or team_id if teams exist)
* `mentor_id`
* `status`
  (Not Started / In Progress / Review Pending / Completed)
* `progress_percentage` (0–100)
* `start_date`
* `end_date`
* `repo_url` (GitHub link)
* `created_at`
* `updated_at`

---

# ✅ **3. Tasks (Project Milestones)**

To track progress properly:

### **Task Fields:**

* `task_id`
* `project_id`
* `task_title`
* `task_description`
* `assigned_to` (student id)
* `status` (Pending / In Progress / Completed)
* `due_date`
* `created_at`
* `updated_at`

---

# ✅ **4. Document Uploads**

For reports, PPTs, research papers, etc.

### **Document Fields:**

* `document_id`
* `project_id`
* `file_name`
* `file_url` (this will be **stored in S3**)
* `uploaded_by` (student or mentor)
* `created_at`

---

# ✅ **5. Activity Log (Optional but Good)**

Useful for **DevOps monitoring**, also helps mentors track changes.

### **Log Fields:**

* `log_id`
* `project_id`
* `performed_by` (student_id / mentor_id)
* `action`
  (Task Updated, Project Status Changed, Document Uploaded, etc.)
* `timestamp`

---

# 🔥 Summary of Entities You Need

| Entity       | Purpose                                    |
| ------------ | ------------------------------------------ |
| Student      | System users who create and track projects |
| Mentor       | Guide students and monitor progress        |
| Project      | Main project info                          |
| Task         | Step-by-step breakdown of project          |
| Document     | Upload & store files in S3                 |
| Activity Log | Track every change for transparency        |

