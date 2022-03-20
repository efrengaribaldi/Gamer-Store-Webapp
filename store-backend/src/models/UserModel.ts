import { Schema, model } from "mongoose";
import User from "../interfaces/User";

const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = model<User>("User", UserSchema);

export default UserModel;
