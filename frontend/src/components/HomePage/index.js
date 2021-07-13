// import WineContainer from "./Wines/wines";
import CampaignPageContainer from "./CampaignPage/campaignPage";
import ImageSlider from "./WineSlider/wineslider";
import WinePageContainer from "./WineOverview/wineOverview";

const HomePageContainer = () => {
  return (
    <>
      <CampaignPageContainer />
      <WinePageContainer/>
      <ImageSlider />
    </>
  );
};

export default HomePageContainer;
