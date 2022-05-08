import "./navigation.css";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="left-bar">
        <span className="logo">
          <img src="https://i.postimg.cc/CLjQtppG/better-Farm.png" alt="" />
        </span>
        <span className="font-serif text-2xl font-semibold ml-1 text-green-600">
          BetterFarm
        </span>
      </Link>
    </nav>
  );
};
