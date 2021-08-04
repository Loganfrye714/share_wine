import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { addWishlist } from "../../store/wishlist";
import { useParams, useHistory, NavLink } from "react-router-dom";
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
                <div className="singleWine__bio">
                  <h4>
                    ---placeholder---- Spain is the third largest wine-producing
                    country in the world after Italy and France. That means
                    there's a lot of wonderful Spanish wine to try. But have you
                    taken time to explore the depth of Spanish wines? Whether
                    you're newly curious, or you already have a wine rack full
                    of Rioja, our guide is a great tool. It will help you
                    understand what makes Spanish wine taste the way it does,
                    and feel confident exploring all the interesting vinos de
                    España.
                  </h4>
                </div>
                <div className="singleWine__card">
                  <img
                    id="singleWine__image"
                    src={wine.img_url}
                    key={wine.id}
                    alt="singleWine"
                  />
                  <div className="singleWine__cardInfo">
                    <h2>{wine.name}</h2>
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
