import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const isAdmin = currentUser ? currentUser.isAdmin : false;
  const username: string = currentUser ? currentUser.username : "null";
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            isAdmin ? <Home username={username} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/users"
          element={
            isAdmin ? (
              currentUser.username === "root" ? (
                <UserList />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* <Route
          path="/user/:userId"
          element={isAdmin ? <User /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/newUser"
          element={
            isAdmin ? (
              currentUser.username === "root" ? (
                <NewUser />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/products"
          element={isAdmin ? <ProductList /> : <Navigate to="/login" />}
        />
        <Route
          path="/product/:productId"
          element={isAdmin ? <Product /> : <Navigate to="/login" />}
        />
        <Route
          path="/newproduct"
          element={isAdmin ? <NewProduct /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
