import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  console.log(email, password, username);

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: passwordHash });

    console.log(newUser);

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = (req, res) => {
  res.send("login");
};
