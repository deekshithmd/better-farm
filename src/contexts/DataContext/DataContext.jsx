import {
  useContext,
  createContext,
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
        category: "Sample",
        subcategory: "Sample-1",
        notice: "Notice Sample",
        details:
          "Sample details stored to provide demo of application to the panalists...",
      },
    ],
    todos: [
      {
        _id: "as67576asd",
        todo: "Complete Sample Today",
        pending: true,
      },
      {
        _id: "sfs6f8s67",
        todo: "Completed Today",
        pending: false,
      },
    ],
    news: [],
  });

  useEffect(() => {
    (async () => {
      const newsResponse = await axios.get(
        "https://api.newscatcherapi.com/v2/search",
        {
          params: {
            q: "agriculture",
            lang: "en",
            sort_by: "relevancy",
            page: "1",
          },
          headers: {
            "x-api-key": "Lm0OQ97Dagokl0qv9XPXyoVZqetWo23wN594qjJDH0k",
          },
        }
      );
      dispatch({ type: "LOAD_NEWS", payload: newsResponse.data });
    })();
  }, []);

  return (
    <DataContext.Provider value={{data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
