import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT || "http://localhost:3000"],
  }),
);

const PORT = process.env.PORT || 3001;

// Use the user routes
app.use("/api/users", userRoutes);

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
