import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { addWishlist } from "../../store/wishlist";
import { useParams, useHistory, NavLink } from "react-router-dom";
import RatingsCard from "./ratings";
import "./review.css";

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const wines = useSelector((state) => Object.values(state.wines));
  const sessionUser = useSelector((state) => state.session.user);
  const [wineId, setWineId] = useState("");

  let userId;

  if (sessionUser) {
    userId = sessionUser.id;
  } else {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getOneWine(id));
  }, [dispatch, id]);

  const onSubmit = async (e) => {
    const wishlist = {
      userId,
      wineId,
    };
    dispatch(addWishlist(wishlist));
  };

  if (wines.length > 1) {
    window.location.reload();
  }

  if (wines.length < 2) {
    return (
      <div>
        <div>
          {wines.map((wine) => (
            <div className="singleWine__grid">
              <>
                <div className="singleWine__card">
                  <img
                    id="singleWine__image"
                    src={wine.img_url}
                    key={wine.id}
                    alt="singleWine"
                  />
                  <div className="singleWine__cardInfo">
                    <h3>{wine.name}</h3>
                    <h4>{wine.location}</h4>
                    <h4>
                      {wine.grape} {wine.vintage}
                    </h4>
                    <h4>${wine.price}</h4>
                    <form onSubmit={onSubmit}>
                      <button
                        id="singleWine__cardButton"
                        onClick={(e) => setWineId(wine.id)}
                      >
                        Add Wine
                      </button>
                    </form>
                  </div>
                </div>
                <div className="singleWine__map">
                  <RatingsCard />
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ReviewContainer;
