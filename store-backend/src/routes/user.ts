import express from "express";

const userRouter = express.Router();

// userRouter.get("/usertest", (req, res) => {
//   res.send("user test is sucessfull");
// });

// userRouter.post("/userposttest", (req, res) => {
//   const username = req.body.username;
//   res.send("your username is: " + username);
//   console.log(username);
// });

export default userRouter;
