import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  findReviewsOneWine,
  addReview,
  removeReview,
} from "../../store/review";
import "./comments.css";
import CommentsModal from "./commentsModal/commentsModal";

const CommentsCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  // Variables for indvidiual wine
  const reviewArray = useSelector((state) => Object.values(state.review));
  const sessionUser = useSelector((state) => state.session.user);

  // state for reviews
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [wineId, setWineId] = useState(id);
  const [newWineComments, setnewWineComments] = useState([]);
  const [reviewSent, setReviewSent] = useState(false);

  useEffect(() => {
    dispatch(findReviewsOneWine(id)).then((data) => setnewWineComments(data));
  }, [dispatch, reviewSent]);

  let userId;

  console.log(newWineComments, "this is newWineComments");

  if (sessionUser) {
    userId = sessionUser.id;
  } else {
    history.push("/");
  }

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
  };

  return (
    <div className="comments__grid">
      <div>
        <form className="comments__form" onSubmit={onSubmit}>
          <h1>Community reviews</h1>
          <div>
            <label>
              Comment Here:
              <textarea
                className="comments__textBox"
                type="text"
                id="name"
                name="name"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="ratings__container">
            <label>
              Your Rating:
              <select
                name="wine ratings"
                className="comments__ratingsBox"
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">--Please choose an option--</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </label>
          </div>
          <button
            className="review__button"
            onClick={() => setReviewSent(true)}
          >
            Post a review
          </button>
        </form>
        <div>
          {newWineComments.map((review) => (
            <div>
              <h4>{review.comment}</h4>
              <button
                className="delete__button"
                onClick={() => deleteReview(review.id)}
              >
                delete
              </button>
              <CommentsModal reviewId={review.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
