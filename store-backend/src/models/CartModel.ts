import { Schema, model } from "mongoose";
import Cart from "../interfaces/Cart";

const CartSchema = new Schema<Cart>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

const CartModel = model<Cart>("Cart", CartSchema);

export default CartModel;
