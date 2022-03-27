import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";

interface HomeProps {
  username: string | undefined;
}

const Home: React.FC<HomeProps> = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const username: string = currentUser ? currentUser.username : "null";
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <h1>Welcome {username}</h1>
          {/* 
          <FeaturedInfo />
          <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
         
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
