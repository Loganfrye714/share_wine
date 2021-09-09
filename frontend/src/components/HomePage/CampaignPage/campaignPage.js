import { NavLink } from "react-router-dom";
import "./campaignPage.css";

const CampaignPageContainer = () => {
  return (
    <div className="campaign__grid">
      <div className="campaign__card">
        <div className="campaign__card-header">
          <h2 className="campaign__card-header-h2">Welcome to Share Wine</h2>
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
};

export default CampaignPageContainer;
