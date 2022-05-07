import "./showrecords.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useData } from "../../contexts";
export const ShowRecords = () => {
  const { data } = useData();
  console.log("show",data.records)
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <div className="record-container">
          {data.records.length > 0 ? (
            data.records.map((record) => {
              return (
                <div className="single-record text-sm" key={record._id}>
                  <span className="record-heading text-center font-semibold text-sm">
                  {record.date}
                  </span>
                  <ul className="record-info border-r-4">
                    <li>Created By : {record.doneby}</li>
                    <li>Category : {record.category}</li>
                    <li>Sub-Category : {record.subcategory}</li>
                  </ul>
                  <div className="work-data pl-5 text-justify">
                    {record.details}
                  </div>
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
