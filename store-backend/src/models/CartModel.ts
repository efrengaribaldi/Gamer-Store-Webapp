import { Schema, model } from "mongoose";

const ProductSchema = new Schema<Cart>(
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

const ProductModel = model<Cart>("Product", ProductSchema);

export default ProductModel;
