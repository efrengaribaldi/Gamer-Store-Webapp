import express from "express";
import UserModel from "../models/UserModel";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAuthorization,
} from "./verifyToken";
const CryptoJS = require("crypto-js");

const userRouter = express.Router();

//Update
userRouter.put("/:id", verifyTokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      username: updatedUser?.username,
      email: updatedUser?.email,
      isAdmin: updatedUser?.isAdmin,
      id: updatedUser?._id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
userRouter.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get User
userRouter.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json({
      username: user?.username,
      email: user?.email,
      isAdmin: user?.isAdmin,
      id: user?._id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Users
userRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get User Stats
userRouter.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default userRouter;
