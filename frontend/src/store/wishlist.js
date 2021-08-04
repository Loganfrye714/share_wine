import { csrfFetch } from "./csrf";
const POST_WISHLIST = "wishlist/POST_WISHLIST";
const GET_WISHLIST = "wishlist/GET_WISHLIST";

const postWishlist = (wishlist) => ({
  type: POST_WISHLIST,
  wishlist,
});

const getWishlist = (wishlists) => ({
  type: GET_WISHLIST,
  wishlists,
});

export const findWishlist = (id) => async (dispatch) => {
  const res = await fetch(`/api/wishlist/${id}`);
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

let initalState = {};

const wishlistReducer = (state = initalState, action) => {
  switch (action.type) {
    case POST_WISHLIST: {
      const newState = { ...state };
      newState[action.wishlist.id] = action.wishlist;
      return newState;
    }
    case GET_WISHLIST: {
      const newState = { ...state };
      action.wishlists.forEach((wishlist) => {
        newState[wishlist.id] = wishlist;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default wishlistReducer;
