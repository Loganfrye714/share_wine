// frontend/src/components/Navigation/index.js
import React from "react";
import "./Navigation.css";
import SearchIcon from "@material-ui/icons/Search";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
// import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Avatar } from "@material-ui/core";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="header">
      <ul>
        <oi>
          <NavLink exact to="/" className="logo">
            Share Wine
          </NavLink>
        </oi>
      </ul>
      <div className="header__middle">
        <input type="text" placeholder="Search any wine" />
        <SearchOutlinedIcon />
      </div>
      <div className="header__rightend">
        <div>
          <h2>Wines</h2>
          <LocalBarIcon />
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </div>
    // {isLoaded && sessionLinks} -> need to be in the icon
  );
}

export default Navigation;
