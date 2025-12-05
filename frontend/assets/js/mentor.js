import { API_BASE_URL } from "./config.js";

// Hardcoded mentor ID for now (login system later)
const mentorId = 1;

async function loadMentorDashboard() {

    // Fetch mentor details
    const res = await fetch(`${API_BASE_URL}/mentors/${mentorId}`);
    const mentor = await res.json();

    document.getElementById("mentor-name").innerText = mentor.name;

    // Stats
    const students = mentor.students;
    const projects = mentor.projects;

    document.getElementById("total-students").innerText = students.length;
    document.getElementById("total-projects").innerText = projects.length;

    const ongoing = projects.filter(p => p.status !== "Completed").length;
    document.getElementById("progressing").innerText = ongoing;

    // Load project list
    const ul = document.getElementById("mentor-projects-ul");
    ul.innerHTML = "";

    projects.forEach(project => {
        const li = document.createElement("li");
        li.className = "project-item";

        li.innerHTML = `
            <strong>${project.project_title}</strong><br>
            Student: ${project.student.name}<br>
            Status: ${project.status}<br>
            Progress: ${project.progress_percentage}%
        `;

        li.onclick = () => {
            window.location.href = `student-projects.html?project=${project.project_id}`;
        };

        ul.appendChild(li);
    });

}

window.onload = loadMentorDashboard;

