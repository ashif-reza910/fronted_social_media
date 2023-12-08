import React from "react";
import "../../Components/rightbar/rightbar.scss";
import TrendingCard from "../trendingCard/TrendingCard";
const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="container">
          <div className="item">
            <h4>Who is following you</h4>
            <div className="friend">
              <div className="friendInfo">
                <img
                  src="https://images.pexels.com/photos/18820769/pexels-photo-18820769/free-photo-of-smiling-young-woman-looking-through-an-amateur-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="friend.img"
                />
                <span>Danielle Leray</span>
              </div>
              <div className="buttons">
                <button>Unfollow</button>
              </div>
            </div>
            <div className="friend">
              <div className="friendInfo">
                <img
                  src="https://images.pexels.com/photos/18820769/pexels-photo-18820769/free-photo-of-smiling-young-woman-looking-through-an-amateur-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="friend.img"
                />
                <span>Danielle Leray</span>
              </div>
              <div className="buttons">
                <button>Unfollow</button>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <TrendingCard />
      </div>
    </>
  );
};

export default Rightbar;
