import "./news.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useData } from "../../contexts";
export const News = () => {
  const { news } = useData();
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <div className="news-container flex">
        {
              news.articles.map(n=>{
                  return(
                    <div className="news-card" key={n._id}>
                    <div className="heading text-lg font-semibold text-justify">{n.title}</div>
                    <div className="news-image">
                      <img
                        src={n.media}
                        alt="NewsImage"
                      />
                    </div>
                    <div className="description text-sm text-justify">
                     {n.summary}
                    </div>
                  </div>
                  )
              })
          }
        </div>
      </div>
    </div>
  );
};

//API Key
//Lm0OQ97Dagokl0qv9XPXyoVZqetWo23wN594qjJDH0k
