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
import { GiGrapes } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";

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
    <>
      <div className="header">
        <div>
          <NavLink exact to="/" className="header__logo">
            Share Wine
          </NavLink>
        </div>
        <div className="header__middle">
          <input type="text" placeholder="Search any wine" />
          <SearchOutlinedIcon />
        </div>
        <div className="header__rightend">
          <div>{isLoaded && sessionLinks}</div>
          <div>
            <NavLink to="/wines">
              <h3 className="header__rightend-wines">Wines</h3>
            </NavLink>
          </div>
          <div>
            <h3 className="header__rightend-wines">Wishlist</h3>
          </div>
          <div>
            <AccountCircleOutlinedIcon className="header__profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
