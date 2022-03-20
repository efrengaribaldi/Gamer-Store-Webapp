interface User {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface Product {
  title: string;
  description: string;
  image: string;
  categories: string[];
  size: string;
  color: string;
  price: number;
}

interface Cart {
  userId: string;
  products: CartProducts[];
}

interface CartProduct {
  productId: string;
  quantity: number;
}

interface Order {
  userId: string;
  products: OrderProduct[];
  amount: number;
  address: object;
  status: string;
}

interface OrderProduct {
  productId: string;
  quantity: number;
}
