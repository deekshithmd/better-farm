import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RecordOption } from "../RecordOption/RecordOption";
export const Sidebar = () => {
  const [show, setShow] = useState(false);

  const ActiveStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
  };

  return (
    <div className="sidebar-content flex text-lg font-sans font-semibold">
      <NavLink
        to="/news"
        style={({ isActive }) => (isActive ? ActiveStyle : undefined)}
        className="list-item"
      >
        News Portal
      </NavLink>

      <NavLink
        to="/todo"
        style={({ isActive }) => (isActive ? ActiveStyle : undefined)}
        className="list-item"
      >
        Todo List
      </NavLink>

      <NavLink
        to="/show"
        style={({ isActive }) => (isActive ? ActiveStyle : undefined)}
        className="list-item list"
        onClick={() => setShow(!show)}
      >
        Record Store{show && <RecordOption />}
      </NavLink>
    </div>
  );
};
