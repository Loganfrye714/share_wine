// frontend/src/components/Navigation/index.js
import React from "react";
import "./Navigation.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
// import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
      </>
    );
  }

  const onclick = async (e) => {
    window.alert("You need to be signed in to use this feature!");
  };

  if (sessionUser) {
    return (
      <>
        <div className="header">
          <div>
            <NavLink exact to="/" className="header__logo">
              Share Wine
            </NavLink>
          </div>
          <div className="header__middle">
            <input type="text" placeholder="Search feature coming soon...." />
            <SearchOutlinedIcon />
          </div>
          <div className="header__rightend">
            <div>
              <NavLink to={`/Wishlist/:${sessionUser.id}`}>
                <h3 className="header__rightend-wines">Wishlist</h3>
              </NavLink>
            </div>
            <div>{isLoaded && sessionLinks}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="header">
        <div>
          <NavLink exact to="/" className="header__logo">
            Share Wine
          </NavLink>
        </div>
        <div className="header__middle">
          <input type="text" placeholder="Search feature coming soon...." />
          <SearchOutlinedIcon />
        </div>
        <div className="header__rightend">
          <div>{isLoaded && sessionLinks}</div>
        </div>
      </div>
    );
  }
}

export default Navigation;
