import "./createrecord.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useData } from "../../contexts";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
export const CreateRecord = () => {
  const { data, dispatch } = useData();
  const navigate=useNavigate()

  const addRecord = (event) => {
    event.preventDefault();
    const { date, doneby, category, subcategory, notice, details } =
      event.target.elements;
    console.log("from create")
    dispatch({
      type: "ADD_RECORD",
      payload: {
        _id: uuid(),
        date: date.value,
        doneby: doneby.value,
        category: category.value,
        subcategory: subcategory.value,
        details: details.value,
        notice: notice.value,
      },
    });
    navigate("/show")
  };

  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content flex">
        <h2 className="text-2xl p-3 font-semibold border-4 mt-3 rounded-2xl">
          Work Record
        </h2>
        <form
          onSubmit={addRecord}
          className="record-data flex text-lg m-8 p-4 font-medium"
        >
          <label htmlFor="date" className="m-1.5">
            Date: <br />
            <input type="date" name="date" />
          </label>
          <label htmlFor="doneby" className="m-1.5">
            Done By: <br />
            <input type="text" name="doneby" />
          </label>
          <label htmlFor="category" className="m-1.5">
            Category: <br />
            <input type="text" name="category" />
          </label>
          <label htmlFor="subcategory" className="m-1.5">
            Sub Category: <br />
            <input type="text" name="subcategory" />
          </label>
          <label htmlFor="notice" className="m-1.5">
            Things to Notice: <br />
            <input type="text" name="notice" />
          </label>
          <label htmlFor="details" className="m-1.5">
            Activity Details: <br />
            <textarea name="details" id="" cols="30" rows="5"></textarea>
          </label>
          <input type="submit" value="Add Record" className="bg-green-500" />
        </form>
      </div>
    </div>
  );
};
