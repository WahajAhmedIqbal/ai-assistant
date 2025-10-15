# 🤖 AI Assistant

This project is an **AI-powered assistant** built with a **React (Vite) frontend** and a **Node.js (Express) backend**.  
The setup allows both frontend and backend to run concurrently using `concurrently`.

---

## 📁 Folder Structure

```

ai-assistant/
│
├── backend/            # Node.js + Express backend
│   ├── src/
│   │   ├── app.js      # Entry point for backend server
│   │   └── ...         # Other backend files
│   └── package.json
│
├── frontend/           # React + Vite frontend
│   ├── src/
│   │   └── ...         # React components
│   └── package.json
│
├── package.json        # Root file for managing both frontend & backend
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
Run these commands in the project root:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
````

---

### 2️⃣ Run the App

Go back to the **root folder** and start both servers:

```bash
npm run dev
```

This will:

* Run the **backend** on: `http://localhost:5000`
* Run the **frontend** on: `http://localhost:5173`

---

### 3️⃣ Fix Common Errors

If you see errors like `Cannot find module '@rollup/rollup-win32-x64-msvc'`, try this:

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

If the backend throws `Cannot find module 'cors'`, install it in the backend:

```bash
cd backend
npm install cors express
```

---

## 🧠 Scripts

At the root level:

| Command                         | Description                           |
| ------------------------------- | ------------------------------------- |
| `npm run dev`                   | Runs both frontend & backend together |
| `npm run dev --prefix frontend` | Runs only the frontend                |
| `npm start --prefix backend`    | Runs only the backend                 |

---

## 🛠️ Tech Stack

**Frontend:**

* React (Vite)
* Tailwind CSS (optional)
* Axios (for API calls)

**Backend:**

* Node.js
* Express
* CORS
* dotenv

---

## 📄 License

This project is licensed under the **MIT License**.

