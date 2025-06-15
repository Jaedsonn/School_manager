import User from "../models/User";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { compare } from "bcryptjs";

config();


export async function createToken(req, res) {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    if(!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = await User.findOne({
      where: {email}
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const token = jwt.sign({
      id: user.id,
      email: user.email,
      password
    }, process.env.SECRET, {
      expiresIn: process.env.EXPIRE_TIME || "1h"
    });
    if (!token) {
      return res.status(500).json({ error: "Failed to create token" });
    }
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error creating token:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
