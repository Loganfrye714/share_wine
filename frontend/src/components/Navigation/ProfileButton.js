// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./ProfileButton.css";
import { useSelector } from "react-redux";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button id="profile-button" onClick={openMenu}>
        <AccountCircleOutlinedIcon />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <NavLink to="/wines" style={{ color: "black" }}>
            <h4 className="dropdown_list">All Wines</h4>
          </NavLink>
          <NavLink
            to={`/Wishlist/:${sessionUser.id}`}
            style={{ color: "black" }}
          >
            <h4 className="dropdown_list">Wishlist</h4>
          </NavLink>
          <h4 className="dropdown_list" onClick={logout}>
            Log Out
          </h4>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
