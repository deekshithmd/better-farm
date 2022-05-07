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
    records: [],
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
      if( JSON.parse(localStorage.getItem("records"))){
      dispatch({
        type: "ADD_RECORD",
        payload: JSON.parse(localStorage.getItem("records")),
      });
    }
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
