import "./record.css";
import { Link } from "react-router-dom";
export const RecordOption = () => {
  return (
    <ul className="record-options text-sm font-sans font-semibold">
      <li className="inner-item">
        <Link to="/show">Check Records</Link>
      </li>
      <li className="inner-item">
        <Link to="/create">Create New Record</Link>
      </li>
    </ul>
  );
};
