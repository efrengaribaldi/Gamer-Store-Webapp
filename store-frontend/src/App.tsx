import { useSelector } from "react-redux";
import {
  Navigate,
  BrowserRouter,
  useLocation,
  Route,
  Routes,
} from "react-router-dom";
import CartView from "./views/CartView";
import HomepageView from "./views/HomepageView";
import LoginView from "./views/LoginView";
import Navbar from "./components/Navbar";
import ProductListView from "./views/ProductListView";
import ProductView from "./views/ProductView";
import RegisterView from "./views/RegisterView";
import React from "react";
import ReactGA from "react-ga";

export function useAnalytics() {
  // Verify if Google Analytics was initialized
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    // If enviroment is localhost, we initialize Analytics
    if (window.location.href.includes("localhost")) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE!);
    }

    // Update state to true. It happens once
    setInitialized(true);
  }, []);

  // Here, we are returning the initialized state to be used after
  return {
    initialized,
  };
}

// We are receiving the initialized prop created by useAnalytics()
// and children props. (All routes provided by Browser Router)
interface WrapperProps {
  initialized: boolean;
  children: React.PropsWithChildren<any>;
}

export function Wrapper(props: WrapperProps) {
  const location = useLocation();

  React.useEffect(() => {
    // If React GA initialized, now we are sending pageviews
    // to our Google Analytics when location changes
    if (props.initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [props.initialized, location]);

  // Here we return the children involved by it's wrapper
  return props.children;
}

const App: React.FC = () => {
  const { initialized } = useAnalytics();
  const user = useSelector((state: any) => state.user.currentUser);
  return (
    <BrowserRouter>
      <>
        <Navbar user={user} />
        <Wrapper initialized={initialized}>
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
        </Wrapper>
      </>
    </BrowserRouter>
  );
};

export default App;
