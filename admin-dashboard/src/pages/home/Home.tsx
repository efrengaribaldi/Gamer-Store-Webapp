import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Home: React.FC = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
          {/* 
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg /> 
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
