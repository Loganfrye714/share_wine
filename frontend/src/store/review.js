import { csrfFetch } from "./csrf";
const POST_REVIEW = "review/POST_REVIEW";
const GET_REVIEWS = "review/GET_REVIEWS";

// define action creators

const postReview = (review) => ({
  type: POST_REVIEW,
  review,
});

const getReview = (review) => ({
  type: GET_REVIEWS,
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

export const findReview = (id) => async (dispatch) => {
  const res = await fetch(`/api/review/${id}`);
  const reviews = await res.json();
  dispatch(getReview(reviews));
  return reviews;
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
    case GET_REVIEWS: {
      const newState = { ...state };
      newState[action.reviews.id] = action.reviews;
      return newState;
    }
    default:
      return state;
  }
};

export default reviewReducer;
