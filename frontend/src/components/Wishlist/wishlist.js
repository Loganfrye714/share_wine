import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { useParams, useHistory } from "react-router-dom";
import { findWishlist, deleteWishlist } from "../../store/wishlist";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { NavLink } from "react-router-dom";

import "./wishlist.css";

const WishlistContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const wishlists = useSelector((state) => Object.values(state.wishlist));

  // -> running into an issue where if i use "useState" it causes to many rerenders and crashes the site. Using window.reload as a work around but will have to look into a better option.

  useEffect(() => {
    dispatch(findWishlist(userId));
  }, [dispatch]);

  const removeWishlist = (wishlistId) => {
    dispatch(deleteWishlist(wishlistId));
    window.location.reload();
  };

  if (wishlists.length) {
    return (
      <>
        <div>
          {wishlists.map((wishlist) => (
            <div className="wishlist__grid">
              <div className="wishlist__button-grid">
                <HighlightOffIcon
                  id="wishlist__button"
                  onClick={() => removeWishlist(wishlist.id)}
                />
              </div>
              <div>
                <>
                  <div className="wishlist__card">
                    <img
                      id="wishlistWine__image"
                      src={wishlist.Wine.img_url}
                      key={wishlist.Wine.id}
                      alt="singleWine"
                    />
                    <div className="singleWine__cardInfo">
                      <h2>{wishlist.Wine.name}</h2>
                      <h4>{wishlist.Wine.location}</h4>
                      <h4>
                        {wishlist.Wine.grape} {wishlist.Wine.vintage}
                      </h4>
                      <h4>${wishlist.Wine.price}</h4>
                    </div>
                  </div>
                </>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div id="nowWishlist_grid">
        <div>
          <h1 id="noWishlist_header">
            You don't have any wines in your wishlist yet! click the below to
            check our collection out.
          </h1>
        </div>
        <div>
          <NavLink to="/wines">
            <button id="noWishlist_button">Checkout Our Wines</button>
          </NavLink>
        </div>
      </div>
    );
  }
};

export default WishlistContainer;
