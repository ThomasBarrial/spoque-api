import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Use the user routes
app.use("/api/users", userRoutes);

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
