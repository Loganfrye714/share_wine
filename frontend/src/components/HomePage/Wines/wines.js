import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import winesReducer, { getWines } from "../../../store/wines";
import { NavLink } from "react-router-dom";
import "./wines.css";

const WineContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const wines = useSelector((state) => Object.values(state.wines));
  console.log(wines);

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
              alt="test"
            />
            <div className="wine__cardInfo">
              <h3>{wine.name}</h3>
              <h4>{wine.region}</h4>
              <h4>{wine.price}</h4>
              <button></button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default WineContainer;
