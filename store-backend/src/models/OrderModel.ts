import { Schema, model } from "mongoose";


interface Order {
  userId: string;
  products: Array<string>;
  amount: number;
  address: Object;
  status: string;
}

const OrderSchema = new Schema<Order>(
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const OrderModel = model<Order>("Order", OrderSchema);

export default OrderModel;
