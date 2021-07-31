import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const singleWine = useSelector((state) => Object.values(state.wines));
  useEffect(() => {
    dispatch(getOneWine(4));
  }, [dispatch]);

  console.log(singleWine);

  return (
    <>
      <h2>Testing 1 / 2 / 3</h2>
    </>
  );
};

export default ReviewContainer;
