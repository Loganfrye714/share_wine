const POST_REVIEW = "review/POST_REVIEW";

// define action creators

const postReview = (review) => ({
  type: POST_REVIEW,
  review,
});
