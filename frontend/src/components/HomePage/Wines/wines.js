import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import winesReducer, { getWines } from "../../../store/wines";
import "./wines.css";

const WineContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const wines = useSelector((state) => Object.values(state.wines));

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  return (
    <div className="allwines__grid">
      {wines.map((wine) => (
        <>
          <div className="wine__card">
            <img
              id="allwines__image"
              src={wine.img_url}
              key={wine.id}
              alt="wines"
            />
            <div className="wine__cardInfo">
              <h2>{wine.name}</h2>
              <h4>{wine.location}</h4>
              <h4>
                {wine.grape} {wine.vintage}
              </h4>
              <h4>${wine.price}</h4>
              <button id="wine__cardButton">Reserve</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default WineContainer;
