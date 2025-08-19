# AI Assessment System

This repository contains the **AI Assessment System**, a backend project built using **Node.js**, **Express**, and **MongoDB**. The system provides a RESTful API to manage users with full CRUD functionality, designed to serve as the backend for an AI assessment platform.

---

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime for server-side development
- **Express** – Fast, minimal web framework for Node.js
- **MongoDB** – NoSQL database for storing user data
- **Mongoose** – ODM to manage MongoDB schemas
- **Postman / curl** – For API testing

---

## 🚀 Features

- Connects to MongoDB (Atlas or local)
- User management API:
  - **Create** a new user
  - **Read** all users or a single user
  - **Update** user details
  - **Delete** a user
- Modular project structure with separate folders for routes and models
- Environment-friendly setup with `.gitignore` to exclude sensitive files

---

## 📂 Project Structure

ai-assessment-system/
│
├─ index.js # Main server file
├─ db.js # MongoDB connection setup
├─ package.json # Project dependencies and scripts
├─ package-lock.json # Dependency lock file
├─ .gitignore # Ignored files/folders (node_modules, .env)
├─ models/
│ └─ User.js # User schema
└─ routes/
└─ userRoutes.js # Routes for user CRUD operations 


---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ADI14M/AI-ASSESSMENT-SYSTEM.git
cd AI-ASSESSMENT-SYSTEM

### 2️⃣ Install dependencies
npm install 

3️⃣ Configure MongoDB

Update db.js with your MongoDB credentials:

const mongoose = require('mongoose');

mongoose.connect('your_connection_string_here', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected!'))
.catch(err => console.error('❌ MongoDB connection error:', err)); 

4️⃣ Run the server
node index.js  

---

📌 Author

Aditya M
