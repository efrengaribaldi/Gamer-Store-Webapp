import express from "express";
import Stripe from "stripe";

const stripeRouter = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: "2020-08-27",
});

stripeRouter.post("/payment", async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    });
    res.status(200).json(charge);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default stripeRouter;
