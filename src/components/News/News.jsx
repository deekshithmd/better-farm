import "./news.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useData } from "../../contexts";
import { useNavigate } from "react-router-dom";
export const News = () => {
  const navigate = useNavigate();
  const { data } = useData();

  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <div className="news-container flex">
          {data?.news?.articles?.map((news) => {
            return (
              <div
                className="news-card"
                key={news._id}
                onClick={() => navigate(`/singlenews/${news._id}`)}
              >
                <div className="heading text-lg font-semibold text-justify truncate">
                  {news.title}
                </div>
                <div className="news-image">
                  <img src={news.media} alt="NewsImage" />
                </div>
                <div className="description text-sm text-justify text-clip overflow-hidden text-ellipsis">
                  {news.summary}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

//API Key
//Lm0OQ97Dagokl0qv9XPXyoVZqetWo23wN594qjJDH0k
