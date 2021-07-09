import { NavLink } from "react-router-dom";
import "./campaignPage.css";

const CampaignPageContainer = () => {
  return (
    <div className="campaign__grid">
      <div className="campaign__card">
        <div className="campaign__card-header">
          <h2 className="campaign__card-header-h2">Region of the month</h2>
          <h1 className="campaign__card-header-h1">Italy</h1>
        </div>
        <div className="campaign__card-content">
          <div className="campaign_card-text">
            <p>Discover the incredible wines of Italy.</p>
            <button id="campaign_card-button">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPageContainer;
