import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { findReviewsOneWine } from "../../store/review";

const CommentsCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(findReviewsOneWine(id));
  }, [dispatch]);

  // Variables for indvidiual wine
  const reviewArray = useSelector((state) => Object.values(state.review));

  return (
    <div>
      {reviewArray.map((review) => (
        <h1>{review.comment}</h1>
      ))}
    </div>
  );
};

export default CommentsCard;
