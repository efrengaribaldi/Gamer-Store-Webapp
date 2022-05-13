import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { loginGoogle } from "../redux/apiCalls";

const HomepageView: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loginGoogle(dispatch);
  }, [dispatch]);
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Products filters={{}} sort={""} />
      <Footer />
    </div>
  );
};

export default HomepageView;
