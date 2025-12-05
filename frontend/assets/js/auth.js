import { API_BASE_URL } from "./config.js";

// STUDENT LOGIN
window.studentLogin = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_BASE_URL}/auth/student/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.status !== 200) {
        document.getElementById("error").innerText = data.error;
        return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("studentId", data.student.student_id);

    window.location.href = "dashboard.html";
};

// MENTOR LOGIN
window.mentorLogin = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_BASE_URL}/auth/mentor/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.status !== 200) {
        document.getElementById("error").innerText = data.error;
        return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("mentorId", data.mentor.mentor_id);

    window.location.href = "dashboard.html";
};
