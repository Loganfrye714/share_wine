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

  useEffect(() => {
    dispatch(findWishlist(userId));
  }, [dispatch]);

  const removeWishlist = (wishlistId) => {
    dispatch(deleteWishlist(wishlistId));
  };

  return (
    <>
      <div>
        <h1>{userAlias} wine's </h1>
      </div>
      <div>
        {wishlists.map((wishlist) => (
          <div className="wishlist__grid">
            <div>
              <button onClick={() => removeWishlist(wishlist.id)}>
                Remove
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
