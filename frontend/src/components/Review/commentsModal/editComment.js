import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { changeReview } from "../../../store/review";

const EditCommentsCard = () => {
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

  let userId;

  if (sessionUser) {
    userId = sessionUser.id;
  } else {
    history.push("/");
  }

  const editReview = async (e) => {
    e.preventDefault();
    const review = {
      rating,
      comment,
      wineId,
      userId,
    };
    dispatch(changeReview(review));
  };

  return (
    <div>
      <form className="comments__form" onSubmit={editReview}>
        <button className="review__button">submit</button>
        <div>
          <label>
            Comment Here:
            <input
              className="comments__textBox"
              type="text"
              id="name"
              name="name"
              onChange={(e) => setComment(e.target.value)}
            ></input>
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
      </form>
    </div>
  );
};

export default EditCommentsCard;
