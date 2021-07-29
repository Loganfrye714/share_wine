import { csrfFetch } from "./csrf";
const POST_REVIEW = "review/POST_REVIEW";
const GET_REVIEWS = "review/GET_REVIEWS";

// define action creators

const postReview = (review) => ({
  type: POST_REVIEW,
  review,
});

const findAllReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews,
});

// Define Thunks

export const allReviews = () => async (dispatch) => {
  const res = await fetch("./api/review");
  const reviews = await res.json();
  dispatch(findAllReviews(reviews));
};

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
    case GET_REVIEWS:
      const newState = { ...state };
      newState[action.reviews.id] = action.reviews;
      return newState;
    case POST_REVIEW: {
      const newState = { ...state };
      newState[action.review.id] = action.review;
      return newState;
    }
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
