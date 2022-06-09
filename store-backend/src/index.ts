import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";
import productRouter from "./routes/product";
import orderRouter from "./routes/order";
import cartRouter from "./routes/cart";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import localStrategy from "./passport/passport";
import stripeRouter from "./routes/stripe";

dotenv.config();

const app = express();

const port = process.env.PORT || "5000";
const mongooseurl = process.env.MONGO_URL!;

mongoose
  .connect(mongooseurl)
  .then(() => console.log("DB Connection Successful!"));

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3002"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

localStrategy(passport);
app.use(
  cookieSession({ name: "session", keys: ["lars"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/carts", cartRouter);
app.use("/api/checkout", stripeRouter);

app.listen(port, () => {
  let listApp = `App listening on port ${port}! (http://localhost:${port})`;
  return console.log(listApp);
});
