import OrderProduct from "./OrderProduct";

export default interface Order {
  userId: string;
  products: OrderProduct[];
  amount: number;
  address: object;
  status: string;
}
