import express from "express";
import Product from "../interfaces/Product";
import ProductModel from "../models/ProductModel";
import { verifyTokenAndAdmin } from "./verifyToken";

const productRouter = express.Router();

//Create
productRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductModel(req.body.product);
console.log(newProduct);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
productRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body.product,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Product
productRouter.get("/find/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Products
productRouter.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qSort = req.query.sort;
  const qColor = req.query.color;
  const qType = req.query.type;
  const query: any = {};
  let sort = {};
  if (qColor) {
    query["color"] = qColor;
  }
  if (qType) {
    query["type"] = qType;
  }
  if (qNew) {
    query["new"] = true;
  }
  try {
    let products;
    switch (qSort) {
      case "asc":
        sort = { price: 1 };
        break;
      case "desc":
        sort = { price: -1 };
        break;
      default:
        sort = { createdAt: -1 };
        break;
    }
    if (query["new"]) {
      products = await ProductModel.find({ new: true })
        .sort({ createdAt: -1 })
        .limit(5);
    } else {
      products = await ProductModel.find(query).sort(sort);
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default productRouter;
