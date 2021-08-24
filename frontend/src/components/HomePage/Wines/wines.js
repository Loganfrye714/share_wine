import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import winesReducer, { getWines } from "../../../store/wines";
import { addWishlist } from "../../../store/wishlist";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./wines.css";

const WineContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const wines = useSelector((state) => Object.values(state.wines));
  const session = useSelector((state) => state.session);

  const [wineId, setWineId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const onSubmit = async (e) => {
    const wishlist = {
      userId,
      wineId,
    };
    dispatch(addWishlist(wishlist));
  };

  return (
    <div className="allwines__grid">
      {wines.map((wine) => (
        <>
          <div className="wine__card">
            <NavLink to={`/${wine.id}`}>
              <img
                id="allwines__image"
                src={wine.img_url}
                key={wine.id}
                alt="wines"
              />
            </NavLink>
            <div className="wine__cardInfo">
              <h2>{wine.name}</h2>
              <h4>{wine.location}</h4>
              <h4>
                {wine.grape} {wine.vintage}
              </h4>
              <h4>${wine.price}</h4>
              <NavLink to={`/${wine.id}`}>
                <button id="wine__cardButton">Reserve</button>
              </NavLink>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default WineContainer;
