import React, { useState } from "react";
import "../../Components/post/post.scss";
import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdOutlineMessage } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = true;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <IoIosMore />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FcLike /> : <FaRegHeart />}2 likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <MdOutlineMessage />1 comments
          </div>
          <div className="item">
            <IoShareSocial />
            share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
