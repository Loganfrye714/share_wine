import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  findReviewsOneWine,
  addReview,
  removeReview,
  changeReview,
} from "../../store/review";
import "./comments.css";
import "./ratings.css";

const RatingsCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const reviewArray = useSelector((state) => Object.values(state.review));
  const session = useSelector((state) => state.session);
  let numberOfRatings = reviewArray.length;

  console.log(reviewArray);

  useEffect(() => {
    dispatch(findReviewsOneWine(id));
  }, [dispatch]);

  let ratings = 0;
  reviewArray.forEach((review) => {
    ratings += review.rating;
  });
  const averageRating = Math.round(ratings / numberOfRatings);

  if (ratings > 0) {
    return (
      <>
        <h4 id="ratings__header">
          <p>This wine has been rated an average {averageRating} / 5 🌟</p>
        </h4>
      </>
    );
  } else {
    return <h4>Oops! this wine doesn't have a rating yet</h4>;
  }
};

export default RatingsCard;
