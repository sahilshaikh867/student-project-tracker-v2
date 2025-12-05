import { API_BASE_URL } from "./config.js";

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");

async function loadProject() {
    const res = await fetch(`${API_BASE_URL}/projects/${projectId}`);
    const project = await res.json();

    document.getElementById("project-title").innerText = project.project_title;
    document.getElementById("project-desc").innerText = project.description;
    document.getElementById("project-domain").innerText = project.project_domain;
    document.getElementById("project-status").innerText = project.status;

    // Progress bar
    const progress = document.getElementById("progress-fill");
    progress.style.width = project.progress_percentage + "%";

    document.getElementById("project-student").innerText = project.student.name;
    document.getElementById("project-mentor").innerText = project.mentor.name;

    // Load tasks
    const taskUl = document.getElementById("task-list");
    taskUl.innerHTML = "";

    project.tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
            <strong>${task.task_title}</strong><br>
            Status: ${task.status}<br>
            Due: ${task.due_date || "N/A"}
        `;
        taskUl.appendChild(li);
    });

    // Load documents
    const docUl = document.getElementById("doc-list");
    docUl.innerHTML = "";

    project.documents.forEach(doc => {
        const li = document.createElement("li");
        li.className = "doc-item";
        li.innerHTML = `
            <a href="${doc.file_url}" target="_blank">${doc.file_name}</a>
        `;
        docUl.appendChild(li);
    });

    // Load activity logs
    const logRes = await fetch(`${API_BASE_URL}/activity/project/${projectId}`);
    const logs = await logRes.json();

    const actUl = document.getElementById("activity-list");
    actUl.innerHTML = "";

    logs.forEach(log => {
        const li = document.createElement("li");
        li.className = "activity-item";
        li.innerHTML = `
            ${log.timestamp.split("T")[0]} - ${log.action}
        `;
        actUl.appendChild(li);
    });
}

window.onload = loadProject;
document.getElementById("go-task-btn").onclick = function () {
    window.location.href = `../student/task-management.html?project=${projectId}`;
};

