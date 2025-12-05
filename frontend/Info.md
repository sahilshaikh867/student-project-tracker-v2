
---

# 🚀 **PART 1 — Correct Folder Structure**

```
student-project-tracker/
│
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── index.html
    ├── assets/
    ├── student/
    └── mentor/
```

Bas **frontend** aur **backend** dono ek hi parent folder me ho.

---

# 🚀 **PART 2 — Backend Start (Local Setup)**

### 1️⃣ Inside `backend/` folder

Install dependencies:

```bash
npm install
```

### 2️⃣ Prisma migrate

```bash
npx prisma migrate dev
```

### 3️⃣ Seed data

```bash
npx prisma db seed
```

### 4️⃣ Start backend

```bash
npm start
```

Your backend will be running at:

```
http://localhost:3000
```

---

# 🚀 **PART 3 — Frontend Connectivity Setup**

### ⭐ Most important file:

👉 `frontend/assets/js/config.js`

Make sure it contains *only* this:

```javascript
export const API_BASE_URL = "http://localhost:3000/api";
```

This tells frontend → backend kidhar hai.

---

# 🚀 **PART 4 — How frontend calls backend**

Example student dashboard me:

```javascript
const res = await fetch(`${API_BASE_URL}/students/${studentId}`);
```

Ye convert hota hai:

```
http://localhost:3000/api/students/1
```

Aur backend data return karta hai.

---

# 🚀 **PART 5 — Test Everything Properly**

### 1️⃣ Backend run karo → `npm start`

**Browser me open:**

```
http://localhost:3000/api/students
http://localhost:3000/api/projects
```

### 2️⃣ Frontend → simple double-click open kare browser me

Example:

```
frontend/student/dashboard.html
```

Console me data appear hona chahiye.

---

# 🚀 **PART 6 — Common Issues + Fixes**

### ❌ 1. CORS Error

Browser cannot fetch backend?

Fix: `backend/src/app.js` already has:

```javascript
app.use(cors());
```

✔ OK.

---

### ❌ 2. Wrong API URL

Always check:

```
console.log(API_BASE_URL)
```

---

### ❌ 3. Frontend not refreshing

Open DevTools → Disable cache → Hard reload.

---

# 🚀 **PART 7 — When Deploying to EC2**

Later jab backend EC2 pe host hoga:

EC2 public IP maan lo:

```
http://13.232.55.10:3000
```

To frontend ka config.js update hoga:

### 👉 Change this:

```javascript
export const API_BASE_URL = "http://13.232.55.10:3000/api";
```

**Bas.**
No other change needed.

---

# 🚀 **PART 8 — When Hosting Frontend on S3**

S3 bucket static hosting URL example:

```
http://student-tracker.s3-website.ap-south-1.amazonaws.com
```

Us page se backend ko call karega via:

```javascript
export const API_BASE_URL = "http://13.232.55.10:3000/api";
```

Meaning:

**Frontend S3 par, Backend EC2 par.
API calls cross-region fine.**

---

# 🚀 **PART 9 — Complete Integration FLOW**

👇 Ye final flow hai:

### ✔ Step 1 — Backend Ready

### ✔ Step 2 — Prisma Migrations Done

### ✔ Step 3 — API test in browser

### ✔ Step 4 — Frontend config.js me correct URL

### ✔ Step 5 — Run frontend pages

### ✔ Step 6 — Dashboard, Projects, Tasks, Documents sab kaam karenge

### ✔ Step 7 — Push to GitHub

### ✔ Step 8 — Deploy backend to EC2

### ✔ Step 9 — Deploy frontend to S3

### ✔ Step 10 — Connect both using config.js

Project DONE.

---

# 🎉 **YOU NOW HAVE A FULLY CONNECTED SYSTEM**

* Backend → Node + Prisma + S3
* Frontend → HTML + CSS + JS
* APIs connected
* Project details
* Tasks CRUD
* Documents
* Activity logs
