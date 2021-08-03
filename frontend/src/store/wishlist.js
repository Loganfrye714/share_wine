import { csrfFetch } from "./csrf";
const POST_WISHLIST = "wishlist/POST_WISHLIST";
const GET_WISHLIST = "wishlist/GET_WISHLIST";

const postWishlist = (wishlist) => ({
  type: POST_WISHLIST,
  wishlist,
});

const getWishlist = (wishlist) => ({
  type: GET_WISHLIST,
  wishlist,
});

export const findWishlist = (id) => async (dispatch) => {
  const res = await `./api/wishlist/${id}`;
  const wishlist = await res.json();
  dispatch(getWishlist(wishlist));
  return wishlist;
};

export const addWishlist = (wishlist) => async (dispatch) => {
  const { wineId, userId } = wishlist;
  const res = await csrfFetch("/api/wishlist", {
    method: "POST",
    body: JSON.stringify({
      wineId,
      userId,
    }),
  });

  const addedWishlist = await res.json();
  dispatch(postWishlist(addedWishlist));
};
