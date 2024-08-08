import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// User Registration Function (already added)
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return res
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

// User Login Function
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      expires: new Date(253402300000000),
      httpOnly: true,
      sameSite: "none",
      secure: process.env.NODE_ENV !== "development",
    });

    res.set({ "Access-Control-Allow-Credentials": true });

    return res.status(200).json({ token, userId: user.id });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
