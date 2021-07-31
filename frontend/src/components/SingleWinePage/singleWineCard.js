import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWines } from "../../store/wines";
import { useParams, useHistory } from "react-router-dom";
import { addReview, findReviewsOneWine } from "../../store/review";
import "./singleWineCard.css";

const SingleWineCard = ({ winos }) => {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const wines = useSelector((state) => Object.values(state.wines));
  console.log(winos, "this is from review card");
  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(findReviewsOneWine(wineId));
  // }, [dispatch]);

  // Variables for indvidiual wine
  const { id } = useParams();
  const selectedWine = winos[id];
  console.log(selectedWine);

  // const session = useSelector((state) => state.session);
  // // variables for the review posting

  // const [rating, setRating] = useState("");
  // const [comment, setComment] = useState("");

  // const [wineId, setWineId] = useState(selectedWine.id);
  // const [userId, setUserId] = useState(session.user.id);

  // const [testId, setTestId] = useState([]);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const review = {
  //     rating,
  //     comment,
  //     wineId,
  //     userId,
  //   };
  //   dispatch(addReview(review));
  //   history.push(`/`);
  //   // this is what is needs to refresh to once the url id bug is fixed
  //   // history.push(`/${id}`);
  // };

  return (
    <div></div>
    // <form onSubmit={onSubmit}>
    //   <div className="singleWine__grid">
    //     <>
    //       <div className="singleWine__bio">
    //         <h4>
    //           ---placeholder---- Spain is the third largest wine-producing
    //           country in the world after Italy and France. That means there's a
    //           lot of wonderful Spanish wine to try. But have you taken time to
    //           explore the depth of Spanish wines? Whether you're newly curious,
    //           or you already have a wine rack full of Rioja, our guide is a
    //           great tool. It will help you understand what makes Spanish wine
    //           taste the way it does, and feel confident exploring all the
    //           interesting vinos de España.
    //         </h4>
    //       </div>
    //       <div className="singleWine__card">
    //         <img
    //           id="singleWine__image"
    //           src={wines[id].img_url}
    //           key={wines[id].id}
    //           alt="singleWine"
    //         />
    //         <div className="singleWine__cardInfo">
    //           <h2>{wines[id].name}</h2>
    //           <h4>{wines[id].location}</h4>
    //           <h4>
    //             {wines[id].grape} {wines[id].vintage}
    //           </h4>
    //           <h4>${wines[id].price}</h4>
    //           <div>
    //             <button>Post a review</button>
    //             <input
    //               type="text"
    //               id="name"
    //               name="name"
    //               onChange={(e) => setComment(e.target.value)}
    //             ></input>
    //           </div>
    //           <div>
    //             <input
    //               type="number"
    //               id="rating"
    //               name="rating"
    //               max="5"
    //               onChange={(e) => setRating(e.target.value)}
    //             ></input>
    //           </div>
    //           <button id="singleWine__cardButton">Wishlist</button>
    //         </div>
    //       </div>
    //       <div className="singleWine__map">
    //         <h1>Map Section</h1>
    //       </div>
    //     </>
    //   </div>
    // </form>
  );
};

export default SingleWineCard;
