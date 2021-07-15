import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import winesReducer, { getWines } from "../../store/wines";
import { useParams } from "react-router-dom";
import "./singleWinePage.css";

const SingleWinePageContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const wines = useSelector((state) => Object.values(state.wines));

  const { id } = useParams();

  console.log(wines[id].img_url + "this is the log");

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  return (
    <div className="allwines__grid">
      <>
        <div className="wine__card">
          <img
            id="allwines__image"
            src={wines[id].img_url}
            key={wines[id].id}
            alt="wines"
          />
          <div className="wine__cardInfo">
            <h2>{wines[id].name}</h2>
            <h4>{wines[id].location}</h4>
            <h4>
              {wines[id].grape} {wines[id].vintage}
            </h4>
            <h4>${wines[id].price}</h4>
            <button id="wine__cardButton">Reserve</button>
          </div>
        </div>
      </>
    </div>
  );
};

export default SingleWinePageContainer;
