import express from "express";
import UserModel from "../models/UserModel";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

const authRouter = express.Router();

// Register
authRouter.post("/register", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC!
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
authRouter.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    !user && res.status(404).json({ message: "User not found" });
    const hash = CryptoJS.AES.decrypt(user?.password!, process.env.PASS_SEC!);
    const password = hash.toString(CryptoJS.enc.Utf8);
    password !== req.body.password &&
      res.status(401).json({ message: "Wrong credentials" });

    const accessToken = jwt.sign(
      {
        id: user?._id,
        isAdmin: user?.isAdmin,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "3d" }
    );
    res.status(200).json({
      username: user?.username,
      email: user?.email,
      isAdmin: user?.isAdmin,
      accessToken: accessToken,
      id: user?._id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default authRouter;
