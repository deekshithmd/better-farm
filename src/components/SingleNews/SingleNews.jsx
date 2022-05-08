import "./singlenews.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts";
export const SingleNews = () => {
  const { newsId } = useParams();
  const { data } = useData();
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content flex">
        {data?.news?.articles.map((news) => {
          return (
            news._id === newsId && (
              <div className="single-news-card" key={news._id}>
                <div className="single-heading text-2xl font-semibold text-justify">
                  {news.title}
                </div>
                <div className="single-news-image">
                  <img src={news.media} alt="NewsImage" />
                </div>
                <div className="news-description text-base text-justify">
                  {news.summary}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
