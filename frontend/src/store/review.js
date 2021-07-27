import { csrfFetch } from "./csrf";
const POST_REVIEW = "review/POST_REVIEW";

// define action creators

const postReview = (review) => ({
  type: POST_REVIEW,
  review,
});

// Define Thunks

export const addReview = (review) => async (dispatch) => {
  const { rating, comment, wineId, userId } = review;
  const res = await csrfFetch("/api/review", {
    method: "POST",
    body: JSON.stringify({
      rating,
      comment,
      wineId,
      userId,
    }),
  });

  const completedReview = await res.json();
  dispatch(postReview(completedReview.review));
};

// Define an inital state
const initalState = {};

// Define reducer
const reviewReducer = (state = initalState, action) => {
  switch (action.type) {
    case POST_REVIEW:
      const newState = { ...state };
      newState[action.review.id] = action.review;
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
