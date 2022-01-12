//Created By Rahul Modi
//Dependencies Import
import React from "react";

//Stylesheet Imports
import "./RecentNews.css";

//Data Imports
import RecentNewsData from "./RecentNewsData";

//Image Imports

const RecentNews = () => {
  return (
    <div className="recentNews__container">
      <h2 className="recentNews__heading">Recent News</h2>

      {/* Mapping each Notice to a card */}
      <div className="recentNews__block">
        {RecentNewsData.map((obj) => {
          return (
            <div className="recentNews__card" key={obj.id}>
              <p className="recentNews__date">{obj.date}</p>
              <p className="recentNews__desp">{obj.description}</p>
              <a href={obj.Link} className="recentNews__link">
                Read more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentNews;
