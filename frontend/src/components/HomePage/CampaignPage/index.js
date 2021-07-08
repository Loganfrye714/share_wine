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
          <p>Discover the amazing wines</p>
          <button>Shop Now</button>
          {/* when you hover over shop now it should show a button */}
        </div>
      </div>
    </div>
  );
};

export default CampaignPageContainer;
