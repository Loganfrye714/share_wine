import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import winesReducer, { getWines } from "../../store/wines";
import { NavLink } from "react-router-dom";

const WineContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const wines = useSelector((state) => Object.values(state.wines));

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  return (
    <div>
      <div>
        {wines.map((wine) => (
          <ul>
            <div>
              <li>
                <img src={wine.img_url} key={wine.id} alt="test" />
              </li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default WineContainer;
