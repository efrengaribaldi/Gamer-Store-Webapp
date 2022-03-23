import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const admin: boolean = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")!).user
  ).currentUser.isAdmin;
  // const admin = true;
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        {admin && (
          <>
            (<Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />)
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
