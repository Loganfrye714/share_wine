import { csrfFetch } from "./csrf";
const POST_REVIEW = "review/POST_REVIEW";
const GET_REVIEWS_FOR_ONE_WINE = "review/GET_REVIEWS_FOR_ONE_WINE";
const GET_REVIEWS = "review/GET_REVIEWS";

// define action creators

const postReview = (review) => ({
  type: POST_REVIEW,
  review,
});

const findAllReviews = (review) => ({
  type: GET_REVIEWS,
  review,
});

const getReviewsOneWine = (review) => ({
  type: GET_REVIEWS_FOR_ONE_WINE,
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

// export const findReviewOneWine = (id) => async (dispatch) => {
//   const res = await fetch(`/api/review/${id}`);
//   const reviewsForOneWine = await res.json();
//   dispatch(getReviewsOneWine(reviewsForOneWine));
//   return reviewsForOneWine;
// };

// export const getAllReviews = () => async (dispatch) => {
//   const res = await fetch("/api/review");
//   const allReviews = await res.json();
//   dispatch(findAllReviews(allReviews));
// };
