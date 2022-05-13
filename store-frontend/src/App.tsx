import { useSelector } from "react-redux";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import CartView from "./views/CartView";
import HomepageView from "./views/HomepageView";
import LoginView from "./views/LoginView";
import Navbar from "./components/Navbar";
import ProductListView from "./views/ProductListView";
import ProductView from "./views/ProductView";
import RegisterView from "./views/RegisterView";
import React from "react";

const App: React.FC = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/cart" element={<CartView />} />
          <Route path="/products" element={<ProductListView />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginView />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <RegisterView />}
          />
          <Route path="/" element={<HomepageView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
