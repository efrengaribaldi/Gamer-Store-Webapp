import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartView from "./views/CartView";
import HomepageView from "./views/HomepageView";
import LoginView from "./views/LoginView";
import ProductListView from "./views/ProductListView";
import ProductView from "./views/ProductView";
import RegisterView from "./views/RegisterView";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductView />} />
        <Route path="/productList" element={<ProductListView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/" element={<HomepageView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
