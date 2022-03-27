import { Schema, model } from "mongoose";
import Product from "../interfaces/Product";

const ProductSchema = new Schema<Product>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ProductModel = model<Product>("Product", ProductSchema);

export default ProductModel;
