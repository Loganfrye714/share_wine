// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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
      <button onClick={openMenu}>
        <i class="fas fa-wine-glass-alt"></i>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <NavLink to="/wines" style={{ color: "black" }}>
            <h4 className="dropdown_list">My Wines</h4>
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
