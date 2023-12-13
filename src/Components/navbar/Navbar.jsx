import React, { useContext } from "react";
import "../../Components/navbar/navbar.scss";
import { MdOutlineHouse } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Snapify</span>
          </Link>
          <MdOutlineHouse style={{ fontSize: "27px" }} />
          {darkMode ? (
            <IoSunnyOutline onClick={toggle} style={{ fontSize: "27px" }} />
          ) : (
            <MdOutlineDarkMode onClick={toggle} style={{ fontSize: "27px" }} />
          )}
          <div className="search">
            <IoIosSearch style={{ fontSize: "27px" }} />
            <input type="text" placeholder="search..." />
          </div>
        </div>
        <div className="right">
          <MdOutlineMessage
            style={{ fontSize: "22px", background: "transparent" }}
          />
          <LuBellRing style={{ fontSize: "22px" }} />
          <VscSettingsGear style={{ fontSize: "22px" }} />
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
