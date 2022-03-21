import { Schema, model } from "mongoose";
import Product from "../interfaces/Product";

const ProductSchema = new Schema<Product>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: [{ type: String }],
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const ProductModel = model<Product>("Product", ProductSchema);

export default ProductModel;
