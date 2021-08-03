import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { useParams, useHistory, NavLink } from "react-router-dom";
import "./review.css";

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneWine(id));
  }, [dispatch, id]);

  const wines = useSelector((state) => Object.values(state.wines));
  const userId = useSelector((state) => state.session.user.id);

  // this conditional is to ensure the page reloads from the home page and pulls only one wine from the redux store
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
                    <NavLink to={`/wishlist/${userId}`}>
                      <button id="singleWine__cardButton">Add Wine</button>
                    </NavLink>
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
