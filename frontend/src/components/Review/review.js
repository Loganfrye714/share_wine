import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allReviews } from "../../store/review";

const ReviewContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allReviews());
  }, [dispatch]);

  return (
    <>
      <h2>Testing 1 / 2 / 3</h2>
    </>
  );
};

export default ReviewContainer;
