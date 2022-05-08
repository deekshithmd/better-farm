import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import { Reducer } from "../Reducer/Reducer";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(Reducer, {
    records: [
      {
        _id: "AA1A",
        date: "2022-05-08",
        doneby: "Deekshith",
        category: "Dairy",
        subcategory: "Feed",
        notice: "Monitor 1st cow",
        details:
          "Provided Feed to first cow need to montior for further development",
      },
    ],
    todos: [],
  });
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const r = await axios.get("https://api.newscatcherapi.com/v2/search", {
        params: {
          q: "agriculture",
          lang: "en",
          sort_by: "relevancy",
          page: "1",
        },
        headers: {
          "x-api-key": "Lm0OQ97Dagokl0qv9XPXyoVZqetWo23wN594qjJDH0k",
        },
      });
      setNews(r.data);
      // if (JSON.parse(localStorage.getItem("records"))?.length > 1) {
      //   console.log("from context");
      //   dispatch({
      //     type: "ADD_RECORD",
      //     payload: JSON.parse(localStorage.getItem("records")),
      //   });
      // } else {
      //   localStorage.setItem("records", JSON.stringify(data.records));
      // }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ news, data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
