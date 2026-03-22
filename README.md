![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-4B32C3?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

**CVision Resume Analyzer** is an AI-powered web application that helps users **analyze, evaluate, and improve their resumes** based on industry standards and job relevance.

Developed during **AgentathonX**, this project leverages **AI and NLP techniques** to provide actionable insights for better resume optimization.

---

# 🌍 Live Demo

🚀 Try CVision live:

🔗 [https://your-deployment-link.com](https://your-deployment-link.com)

---

# 🚀 Features

✅ **Resume Analysis (AI-Powered)**  
Upload your resume and get:

- Resume score
- Skill extraction
- Keyword analysis
- Improvement suggestions

---

✅ **Job Description Matching**

- Compare resume with job description
- Match percentage score
- Identify missing skills

---

✅ **Smart Suggestions**

- Improve weak sections
- Optimize keywords for ATS (Applicant Tracking Systems)
- Enhance formatting and clarity

---

✅ **File Upload Support**

- Upload resumes in PDF format
- Automatic parsing and processing

---

✅ **Clean & Responsive UI**

- Built with Bootstrap
- User-friendly dashboard
- Structured result display

---

# 🧩 Tech Stack

| Layer | Technologies |
|------|-------------|
| **Frontend** | EJS / HTML / CSS / JavaScript / Bootstrap |
| **Backend** | Node.js / Express.js |
| **AI / NLP** | NVidia LLM 3 Model |
| **File Handling** | pdf.js npm package |
| **Deployment** | Render / Vercel |

---

## 📂 Project Structure

```
Team-Quantum-Agents-AgentathonX/
│
├── public/ # Static assets (CSS, JS, images)
│ ├── styles/
│ └── images/
├── views/ # EJS templates
│ ├── index.ejs
│ ├── result.ejs
│ ├── upload.ejs
│ └── partials/
├── routes/ # Application routes
├── controllers/ # Business logic
├── utils/ # Helper functions (AI/NLP processing)
├── uploads/ # Uploaded resumes
├── app.js # Main server file
├── .gitignore
├── package.json
└── README.md
```
# ⚙️ Installation & Setup
## 1️⃣ Clone the repository
```bash
git clone https://github.com/YourUsername/CVision.git
cd CVision
```
## 2️⃣ Install Dependencies
```bash
npm install
```
## 3️⃣ Set up environment variables
Create a .env file in the root directory:
```bash
NVIDIA_API_KEY=your_nvidia_api_key
```
## 4️⃣ Run the app locally
```bash
node app.js
```

Visit: http://localhost:3000

# 🧠 How It Works
## Resume Upload 📄
- User uploads a resume in PDF format.
- Text Extraction 🔍
## Extracts content using PDF parsing libraries.
- AI Analysis 🤖
- Evaluates resume structure
- Extracts skills and keywords
- Scores resume based on industry standards
## Job Matching 🎯
- Compares resume with job descriptions to calculate compatibility.
- Suggestions & Feedback 💡
- Provides actionable improvements for better ATS ranking.
##⚡ Notes
- AI responses may vary slightly based on input resume content.
- Ensure resumes are well-formatted for accurate parsing.
- API rate limits may affect response time.

## 🛡️ License

This project is licensed under the MIT License — see the LICENSE file for details.

## ⭐ Support

If you find CVision Resume Analyzer helpful, give it a ⭐ star on GitHub and share it with your network!

“Build resumes that get noticed, not rejected.”
