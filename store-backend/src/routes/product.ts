import express from "express";
import ProductModel from "../models/ProductModel";
import { verifyTokenAndAdmin } from "./verifyToken";

const productRouter = express.Router();

//Create
productRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductModel(req.body);

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
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
productRouter.delete("/:id", productRouter, async (req, res) => {
    try {
      await ProductModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User deleted" });
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
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await ProductModel.find({ new: true })
        .sort({ createdAt: -1 })
        .limit(5);
    } else if (qCategory) {
      products = await ProductModel.find({
        category: {
          $in: [qCategory],
        },
      }).sort({ createdAt: -1 });
    } else {
      products = await ProductModel.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});



export default productRouter;
