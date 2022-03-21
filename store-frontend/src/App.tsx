import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageView from "./views/HomepageView";
import Product from "./views/Product";
import ProductList from "./views/ProductList";
import Register from "./views/Register";

const App: React.FC = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" />
    //     <Route path="/" element={<HomepageView />} />
    //   </Routes>
    // </BrowserRouter>
    //<ProductList/>
    //<Product/>
    <Register />
  );
};

export default App;
