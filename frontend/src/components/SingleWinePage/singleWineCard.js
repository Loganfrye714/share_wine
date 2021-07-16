import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import winesReducer, { getWines } from "../../store/wines";
import { useParams } from "react-router-dom";
import "./singleWineCard.css";

const SingleWineCard = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const wines = useSelector((state) => Object.values(state.wines));

  const { id } = useParams();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  return (
    <>
      <div className="singleWine__grid">
        <>
          <div className="singleWine__card">
            <img
              id="singleWine__image"
              src={wines[id].img_url}
              key={wines[id].id}
              alt="singleWine"
            />
            <div className="singleWine__cardInfo">
              <h2>{wines[id].name}</h2>
              <h4>{wines[id].location}</h4>
              <h4>
                {wines[id].grape} {wines[id].vintage}
              </h4>
              <h4>${wines[id].price}</h4>
              <button id="singleWine__cardButton">Reserve</button>
            </div>
          </div>
          <div className="singleWine__map">
            <h1>Map Section</h1>
          </div>
        </>
      </div>
    </>
  );
};

export default SingleWineCard;
