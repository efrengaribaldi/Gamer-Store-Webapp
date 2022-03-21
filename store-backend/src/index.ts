import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import productRouter from "./routes/product";
import orderRouter from "./routes/order";
import cartRouter from "./routes/cart";

dotenv.config();

const app = express();

const port = process.env.EXPRESS_PORT || "5000";
const mongooseurl = process.env.MONGO_URL!;

mongoose
  .connect(mongooseurl)
  .then(() => console.log("DB Connection Successful!"));

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/carts", cartRouter);

app.listen(port, () => {
  let listApp = `App listening on port ${port}! (http://localhost:${port})`;
  return console.log(listApp);
});
