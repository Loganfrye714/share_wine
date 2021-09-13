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

const CommentsCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(findReviewsOneWine(id));
  }, [dispatch]);

  // Variables for indvidiual wine
  const reviewArray = useSelector((state) => Object.values(state.review));
  const session = useSelector((state) => state.session);

  // state for reviews
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [wineId, setWineId] = useState(id);
  const [userId, setUserId] = useState(session.user.id);

  const deleteReview = (reviewId) => {
    dispatch(removeReview(reviewId));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const review = {
      rating,
      comment,
      wineId,
      userId,
    };
    dispatch(addReview(review));
    window.location.reload();
  };

  const changeReview = async (e) => {
    e.preventDefault();
    const review = {
      rating,
      comment,
      wineId,
      userId,
    };
    dispatch(changeReview(review));
    window.location.reload();
  };

  return (
    <div className="comments_grid">
      <h1>Community reviews</h1>
      <form onSubmit={onSubmit}>
        <button>Post a review</button>
        <div>
          Comment Here:
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setComment(e.target.value)}
          ></input>
        </div>
        <div>
          Your Rating:
          <input
            type="number"
            id="rating"
            name="rating"
            max="5"
            onChange={(e) => setRating(e.target.value)}
          ></input>
        </div>
        <div>
          {reviewArray.map((review) => (
            <div>
              <h4>{review.comment}</h4>
              <button onClick={() => deleteReview(review.id)}>
                Delete review
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CommentsCard;
