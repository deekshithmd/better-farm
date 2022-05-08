import "./home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home flex flex-col bg-green-400">
      <span className="text-6xl font-bold">BetterFarm</span>
      <Link
        to="/news"
        className="p-1.5 text-xl bg-green-600 rounded-lg hover:bg-green-500 border-2 border-cyan-600"
      >
        Explore
      </Link>
    </div>
  );
};
