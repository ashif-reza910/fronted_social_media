import React, { useContext } from "react";
import "../stories/stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //Dummy data

  const stories = [
    {
      id: 1,
      name: "friend",
      img: "https://images.pexels.com/photos/5324309/pexels-photo-5324309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "friend",
      img: "https://images.pexels.com/photos/5324309/pexels-photo-5324309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "friend",
      img: "https://images.pexels.com/photos/5324309/pexels-photo-5324309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "friend",
      img: "https://images.pexels.com/photos/5324309/pexels-photo-5324309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <>
      <div className="stories">
        <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
        {stories.map((story) => (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stories;
