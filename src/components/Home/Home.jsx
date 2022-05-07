import "./home.css";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
export const Home = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <h1>Home</h1>
        <Link to="/news">see</Link>
      </div>
    </div>
  );
};
