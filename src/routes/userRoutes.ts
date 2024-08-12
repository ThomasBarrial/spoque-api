import { Router } from "express";
import {
  registerUser,
  loginUser,
  getOneUser,
} from "../controllers/userController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

//User Roads
router.get("/:email", getOneUser);

// User registration route
router.post("/register", registerUser);

// User login route
router.post("/login", loginUser);

// Testting MiddleWare
router.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.body?.email}` });
});
export default router;
