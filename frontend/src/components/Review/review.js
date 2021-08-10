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
  const user_Id = useSelector((state) => state.session.user.id);
  const [wineId, setWineId] = useState("");
  const [userId, setUserId] = useState(user_Id);

  useEffect(() => {
    dispatch(getOneWine(id));
  }, [dispatch, id]);

  if (wines.length > 1) {
    window.location.reload();
  }

  const onSubmit = async (e) => {
    const wishlist = {
      userId,
      wineId,
    };
    dispatch(addWishlist(wishlist));
  };

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
                    <RatingsCard />
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
                  <h1>Map Section</h1>
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
