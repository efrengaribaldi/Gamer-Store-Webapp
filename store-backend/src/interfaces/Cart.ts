import CartProduct from "./CartProduct";

export default interface Cart {
  userId: string;
  products: CartProduct[];
}
