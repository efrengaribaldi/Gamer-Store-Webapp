import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageView from "./views/HomepageView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/" element={<HomepageView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
