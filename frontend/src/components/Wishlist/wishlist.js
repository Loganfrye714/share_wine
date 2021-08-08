import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { useParams, useHistory } from "react-router-dom";
import { findWishlist, deleteWishlist } from "../../store/wishlist";
import "./wishlist.css";

const WishlistContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const wishlists = useSelector((state) => Object.values(state.wishlist));
  const userAlias = useSelector((state) => state.session.user.username);
  const history = useHistory();

  // -> running into an issue where if i use "useState" it causes to many rerenders and crashes the site. Using window.reload as a work around but will have to look into a better option.

  useEffect(() => {
    dispatch(findWishlist(userId));
  }, [dispatch]);

  const removeWishlist = (wishlistId) => {
    dispatch(deleteWishlist(wishlistId));
    window.location.reload();
  };

  return (
    <>
      <div>
        <h1>{userAlias} wine's </h1>
      </div>
      <div>
        {wishlists.map((wishlist) => (
          <div className="wishlist__grid">
            <div className="wishlist__button-grid">
              <button
                id="wishlist__button"
                onClick={() => removeWishlist(wishlist.id)}
              >
                X
              </button>
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
};

export default WishlistContainer;
