import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", taskRoutes);

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
