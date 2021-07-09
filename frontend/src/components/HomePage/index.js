import WineContainer from "./Wines/wines";
import CampaignPageContainer from "./CampaignPage/campaignPage";

const HomePageContainer = () => {
  return (
    <>
      <CampaignPageContainer />
      <WineContainer />
    </>
  );
};

export default HomePageContainer;
