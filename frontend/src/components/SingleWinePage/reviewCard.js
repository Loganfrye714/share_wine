import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWines } from "../../store/wines";
import { useParams, useHistory } from "react-router-dom";
import { addReview, findReviewsOneWine } from "../../store/review";

const ReviewCard = () => {
  // Hooks
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  useEffect(() => {
    dispatch(findReviewsOneWine(wineId));
  }, [dispatch]);

  // Variables for indvidiual wine
  const { id } = useParams();
  const wines = useSelector((state) => Object.values(state.wines));
  // const reviews = useSelector((state) => Object.values(state.review));
  const [wineId, setWineId] = useState(wines[id].id);
  // const reviewArray = reviews[0];

  return (
    <div>
      {/* {reviewArray.map((review) => (
        <div>{review.comment}</div>
      ))} */}
    </div>
  );
};

export default ReviewCard;
