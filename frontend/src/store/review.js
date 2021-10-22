import { csrfFetch } from "./csrf";
const POST_REVIEW = "review/POST_REVIEW";
const GET_REVIEWS = "review/GET_REVIEWS";
const GET_REVIEWS_FOR_ONE_WINE = "review/GET_REVIEWS_FOR_ONE_WINE";
const DELETE_REVIEW = "review/DELETE_REVIEW";
const UPDATE_REVIEW = "review/UPDATE_REVIEW";

// define action creators
const postReview = (review) => ({
  type: POST_REVIEW,
  review,
});

const findAllReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews,
});

const getReviewsOneWine = (reviews) => ({
  type: GET_REVIEWS_FOR_ONE_WINE,
  reviews,
});

const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  review,
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review,
});

// Define Thunks
export const allReviews = () => async (dispatch) => {
  const res = await fetch("./api/review");
  const reviews = await res.json();
  dispatch(findAllReviews(reviews));
};

export const findReviewsOneWine = (id) => async (dispatch) => {
  const res = await fetch(`/api/review/${id}`);
  const reviewsForOneWine = await res.json();
  dispatch(getReviewsOneWine(reviewsForOneWine));
  return reviewsForOneWine;
};

export const removeReview = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/review/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });
  const review = await res.json();
  dispatch(deleteReview(review));
  return review;
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
  dispatch(postReview(completedReview));
};

export const changeReview = (review) => async (dispatch) => {
  const { rating, comment, wineId, userId, reviewId } = review;
  const res = await csrfFetch(`/api/review/${reviewId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating,
      comment,
      wineId,
      userId,
      reviewId,
    }),
  });

  const changedReview = await res.json();
  dispatch(updateReview(changedReview));
};

// Define an inital state
let initalState = {};

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
    case UPDATE_REVIEW: {
      const newState = { ...state };
      newState[action.review.id] = action.review;
      return newState;
    }
    case GET_REVIEWS_FOR_ONE_WINE: {
      const newState = { ...state };
      action.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    }
    case DELETE_REVIEW: {
      const newState = { ...state };
      delete newState[action.review.id];
      return newState;
    }
    default:
      return state;
  }
};

export default reviewReducer;
