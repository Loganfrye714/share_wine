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

  useEffect(() => {
    dispatch(findReviewsOneWine(id));
  }, [dispatch]);

  let ratings = 0;
  reviewArray.forEach((review) => {
    ratings += review.rating;
  });
  const averageRating = Math.round(ratings / reviewArray.length);

  return <h4>Rating - {averageRating} / 5 stars </h4>;
};

export default RatingsCard;
