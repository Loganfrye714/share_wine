import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { useParams } from "react-router-dom";

const SingleWineCard = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const { id } = useParams();

  // const wines = useSelector((state) => Object.values(state.wines));
  // const selectedWine = wines[id];
  // console.log(selectedWine);

  // useEffect(() => {
  //   dispatch(getWines());
  // }, [dispatch]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const wine = useSelector((state) => Object.values(state.wines));
  console.log(wine);
  useEffect(() => {
    dispatch(getOneWine(id));
  }, [dispatch, id]);

  // const session = useSelector((state) => state.session);
  // const [rating, setRating] = useState("");
  // const [comment, setComment] = useState("");
  // const [wineId, setWineId] = useState(wines.id);
  // const [userId, setUserId] = useState(session.user.id);

  // ---- POST A REVIEW CODE ----
  // useEffect(() => {
  //   dispatch(findReviewsOneWine(wineId));
  // }, [dispatch]);

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
    <div>
      <div>
        {wine.map((wine) => (
          <div>
            <img
              id="allwines__image"
              src={wine.img_url}
              key={wine.id}
              alt="wines"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleWineCard;

// // <form onSubmit={onSubmit}>
// <div className="singleWine__grid">
//   {wines.map((wine) => (
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
//           src={wine.img_url}
//           key={wine.id}
//           alt="singleWine"
//         />
//         <div className="singleWine__cardInfo">
//           <h2>{wine.name}</h2>
//           <h4>{wine.location}</h4>
//           <h4>
//             {wine.grape} {wine.vintage}
//           </h4>
//           <h4>${wine.price}</h4>
//           {/* <div>
//           <button>Post a review</button>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             onChange={(e) => setComment(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             max="5"
//             onChange={(e) => setRating(e.target.value)}
//           ></input>
//         </div> */}
//           <button id="singleWine__cardButton">Wishlist</button>
//         </div>
//       </div>
//       <div className="singleWine__map">
//         <h1>Map Section</h1>
//       </div>
//     </>
//   ))}
// </div>
// // </form>
