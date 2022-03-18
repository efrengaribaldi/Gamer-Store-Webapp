import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageView from "./views/homepage/HomepageView";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" />
        <Route path="/" element={<HomepageView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
