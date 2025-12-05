import { API_BASE_URL } from "./config.js";

// Hardcoded student ID for now (later login system add hoga)
const studentId = 1;

async function loadDashboard() {
    // Get student details
    const studentRes = await fetch(`${API_BASE_URL}/students/${studentId}`);
    const student = await studentRes.json();

    document.getElementById("student-name").innerText = student.name;

    // Update projects UI
    const projects = student.projects;
    document.getElementById("total-projects").innerText = projects.length;

    let completedTasks = 0;
    let pendingTasks = 0;

    // Create project list
    const ul = document.getElementById("projects-ul");
    ul.innerHTML = "";  

    projects.forEach(p => {

        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${p.project_title}</strong> <br>
            Status: ${p.status} <br>
            Progress: ${p.progress_percentage}%
        `;
        
        li.onclick = () => {
            window.location.href = `project-details.html?project=${p.project_id}`;
        };

        ul.appendChild(li);
    });

    // Count tasks
    projects.forEach(project => {
        project.tasks.forEach(task => {
            if (task.status === "Completed") completedTasks++;
            else pendingTasks++;
        });
    });

    document.getElementById("completed-tasks").innerText = completedTasks;
    document.getElementById("pending-tasks").innerText = pendingTasks;
}

// INITIAL LOAD
window.onload = loadDashboard;

