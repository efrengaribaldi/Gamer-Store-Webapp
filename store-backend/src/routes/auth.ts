import express, { Router } from "express";
import UserModel from "../models/UserModel";

const authRouter = express.Router();

// Register
authRouter.post("/register", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default authRouter;
