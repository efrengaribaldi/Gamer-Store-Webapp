import express, { Router } from "express";
import UserModel from "../models/UserModel";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import passport from "passport";

const authRouter = express.Router();
const CLIENT_URL = "http://localhost:3000/";

// Register
authRouter.post("/register", async (req, res) => {
  const reqUser = req.body.user;
  const newUser = new UserModel({
    username: reqUser.username,
    email: reqUser.email,
    password: CryptoJS.AES.encrypt(
      reqUser.password,
      process.env.PASS_SEC!
    ).toString(),
    isAdmin: reqUser.isAdmin,
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
    // res.status(500).json(error);
  }
});

authRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

authRouter.get("/login/success", (req: any, res) => {
  if (req.user) {
    const username = req.user.displayName;
    const id = req.user.id;
    const isAdmin = false;
    const email = "@gmail.com";

    const accessToken = jwt.sign(
      {
        id: id,
        isAdmin: isAdmin,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "3d" }
    );
    res.status(200).json({
      username: username,
      email: email,
      isAdmin: isAdmin,
      accessToken: accessToken,
      id: id,
    });
  } else {
    res.status(204).send({});
  }
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default authRouter;
