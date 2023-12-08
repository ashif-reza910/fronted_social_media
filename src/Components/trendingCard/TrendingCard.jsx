import React from "react";
import "../trendingCard/trending.scss";
import { TrendData } from "../../data/TrendingData";
import { Link } from "react-router-dom";
const TrendingCard = () => {
  return (
    <>
      <div className="trendingCard">
        <h4 style={{ textAlign: "center" }}>Trends for you</h4>
        {TrendData.map((trend) => {
          return (
            <div className="trend">
              <Link
                className="trendLink"
                style={{
                  textDecoration: "none",
                  // color: "black",
                  fontWeight: "700",
                }}
              >
                #{trend.name}
              </Link>
              {/* <span>{trend.shares}</span> */}
            </div>
          );
        })}
        <div className="button">
          <button>share</button>
        </div>
      </div>
    </>
  );
};

export default TrendingCard;
