import "./showrecords.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useData } from "../../contexts";
export const ShowRecords = () => {
  const { data, dispatch } = useData();
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <div className="record-container flex flex-wrap">
          {data.records.length > 0 ? (
            data.records.map((record) => {
              return (
                <div className="single-record text-sm" key={record._id}>
                  <span className="record-heading text-center font-semibold text-sm">
                    {record.date}
                  </span>
                  <ul className="record-info border-r-4">
                    <li>
                      <span className="font-medium"> Created By : </span>
                      {record.doneby}
                    </li>
                    <li>
                      <span className="font-medium">Category : </span>
                      {record.category}
                    </li>
                    <li>
                      <span className="font-medium">Sub-Category : </span>
                      {record.subcategory}
                    </li>
                    <li>
                      <span className="font-medium">To be Monitored: </span>
                      {record.notice}
                    </li>
                  </ul>
                  <div className="work-data pl-5 text-justify">
                    <span className="font-medium underline">Details : </span>
                    {record.details}
                  </div>
                  <button
                    className="record-footer text-center font-semibold text-sm bg-red-300 rounded-lg flex mt-3"
                    onClick={() =>
                      dispatch({ type: "DELETE_RECORD", payload: record })
                    }
                  >
                    Delete Record
                  </button>
                </div>
              );
            })
          ) : (
            <h1 className="text-2xl">No records added</h1>
          )}
        </div>
      </div>
    </div>
  );
};
