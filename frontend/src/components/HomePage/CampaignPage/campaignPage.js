import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./campaignPage.css";
import LoginFormModal from "../../LoginFormModal";

const CampaignPageContainer = () => {
  const session = useSelector((state) => state.session);

  if (session.user) {
    return (
      <div className="campaign__grid">
        <div className="campaign__card">
          <div className="campaign__card-header">
            <img
              className="campaign__card-headerimage "
              alt="view of wine table"
              src="https://images.vivino.com/misc/market_editorial/chocolate_pairing_21/background_image_desktop.jpg"
            />
            <h2 className="campaign__card-header-h2">Share Wine</h2>
          </div>
          <div className="campaign__card-content">
            <div className="campaign_card-text">
              <p>Discover our incredible wines</p>
              <NavLink exact to="/wines">
                <button id="campaign_card-button">Explore Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="campaign__grid">
        <div className="campaign__card">
          <div className="campaign__card-header">
            <img
              className="campaign__card-headerimage "
              alt="view of wine table"
              src="https://images.vivino.com/misc/market_editorial/chocolate_pairing_21/background_image_desktop.jpg"
            />
            <h2 className="campaign__card-header-h2">Welcome to Share Wine</h2>
          </div>
          <div className="campaign__card-content">
            <div className="campaign_card-text">
              <p>
                We can't wait for you to review, share and try some of our
                favorite wines.
              </p>
              <p>First please sign up or login to get started.</p>
              <LoginFormModal />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CampaignPageContainer;
