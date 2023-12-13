import React from "react";
import "../../Components/stories/Stories";
// import Login from "../login/Login";
import "./home.scss";
import Stories from "../../Components/stories/Stories";
// import Post from '../../Components/posts/Posts'
import Posts from "../../Components/posts/Posts";
const Home = () => {
  return (
    <>
      <div className="home">
        <Stories />
        <Posts />
      </div>
    </>
  );
};

export default Home;
