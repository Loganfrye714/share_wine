import { NavLink } from "react-router-dom";
import "./campaignPage.css";

const CampaignPageContainer = () => {
  const headerText = "Region of the month";
  const line2 = "Italy";

  return (
    <div className="campaign__grid">
      <div className="campaign__card">
        <div className="campaign__card-header">
          <h2 className="campaign__card-header-h2">Region of the month</h2>
          <h1 className="campaign__card-header-h1">Italy</h1>
        </div>
        <div className="campaign__card-content"></div>
      </div>
    </div>
  );
};

export default CampaignPageContainer;
