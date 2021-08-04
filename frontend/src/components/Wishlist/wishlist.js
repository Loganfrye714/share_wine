import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { useParams, useHistory } from "react-router-dom";
import { findWishlist } from "../../store/wishlist";

const WishlistContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const wishlists = useSelector((state) => Object.values(state.wishlist));

  wishlists.forEach((list) => {
    console.log(list.Wine);
  });

  useEffect(() => {
    dispatch(findWishlist(userId));
  }, [dispatch]);

  return (
    <div>
      {wishlists.map((wishlist) => (
        <div className="allwines__grid">
          <div className="singleWine__grid">
            <>
              <div className="singleWine__card">
                <img
                  id="singleWine__image"
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
  );
};

export default WishlistContainer;
