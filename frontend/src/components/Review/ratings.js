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

const RatingsCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const reviewArray = useSelector((state) => Object.values(state.review));
  const session = useSelector((state) => state.session);
  let numberOfRatings = reviewArray.length;

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
        <h4>Average rating - {averageRating} / 5 🌟 </h4>
        <h4>{reviewArray.length} reviews for this wine</h4>
      </>
    );
  } else {
    return <h4>Oops! this wine doesn't have a rating yet</h4>;
  }
};

export default RatingsCard;
