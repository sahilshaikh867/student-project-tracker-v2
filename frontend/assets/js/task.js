import { API_BASE_URL } from "./config.js";

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");
const studentId = 1; // later dynamic hoga

// Load all tasks of project
async function loadTasks() {
    const res = await fetch(`${API_BASE_URL}/projects/${projectId}`);
    const project = await res.json();

    const ul = document.getElementById("task-list");
    ul.innerHTML = "";

    project.tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";

        li.innerHTML = `
            <strong>${task.task_title}</strong><br>
            ${task.task_description} <br>
            Status: ${task.status} <br>
            Due: ${task.due_date?.split("T")[0] || "N/A"}

            <div class="task-controls">
                <button class="update-btn" onclick="updateTask(${task.task_id}, '${task.status}')">Update</button>
                <button class="delete-btn" onclick="deleteTask(${task.task_id})">Delete</button>
            </div>
        `;

        ul.appendChild(li);
    });
}

// Create a new task
document.getElementById("create-task-btn").onclick = async () => {
    const title = document.getElementById("task-title").value;
    const desc = document.getElementById("task-desc").value;
    const status = document.getElementById("task-status").value;
    const date = document.getElementById("task-date").value;

    const body = {
        task_title: title,
        task_description: desc,
        status: status,
        due_date: date,
        project_id: Number(projectId),
        assigned_to_id: studentId
    };

    await fetch(`${API_BASE_URL}/tasks`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    loadTasks();
};

// Update task status
window.updateTask = async function (taskId, currentStatus) {
    const newStatus = prompt("Enter new status: Pending / In Progress / Completed", currentStatus);

    if (!newStatus) return;

    await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ status: newStatus })
    });

    loadTasks();
};

// Delete task
window.deleteTask = async function (taskId) {
    if (!confirm("Delete this task?")) return;

    await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: "DELETE"
    });

    loadTasks();
};

window.onload = loadTasks;

