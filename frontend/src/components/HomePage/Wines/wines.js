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
    <div>
      <div className="allwines_grid">
        {wines.map((wine) => (
          <div className="wine_card">
            <img
              id="allwines_image"
              src={wine.img_url}
              key={wine.id}
              alt="test"
            />
            <ul>
              <ol>{wine.name}</ol>
              <ol>{wine.location}</ol>
              <ol>{wine.vintage}</ol>
              <ol>{wine.price}</ol>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineContainer;
