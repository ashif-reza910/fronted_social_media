import React from "react";
import "../../Components/leftbar/leftbar.scss";
import friends from "../../asset/friend.png";
import group from "../../asset/group.png";
import market from "../../asset/marketplace.png";
import watch from "../../asset/watch.png";
import memories from "../../asset/5.png";
import event from "../../asset/6.png";
import gaming from "../../asset/7.png";
import gallery from "../../asset/8.png";
import videos from "../../asset/9.png";
import messages from "../../asset/10.png";
import tutorials from "../../asset/11.png";
import courses from "../../asset/12.png";
import fund from "../../asset/13.png";
const Leftbar = () => {
  return (
    <>
      <div className="leftbar">
        <div className="container">
          <div className="menu">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user"
              />
              <span>userName</span>
            </div>
            <div className="item">
              <img src={friends} alt="friend" />
              <span>friends</span>
            </div>
            <div className="item">
              <img src={group} alt="group" />
              <span>Group</span>
            </div>
            <div className="item">
              <img src={market} alt="market" />
              <span>MarketPlace</span>
            </div>
            <div className="item">
              <img src={watch} alt="watch" />
              <span>Watch</span>
            </div>
            <div className="item">
              <img src={memories} alt="memories" />
              <span>memories</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>your ShortCut</span>
            <div className="item">
              <img src={event} alt="event" />
              <span>Event</span>
            </div>
            <div className="item">
              <img src={gaming} alt="gaming" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={gallery} alt="gallery" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={videos} alt="videos" />
              <span>Videos</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftbar;
