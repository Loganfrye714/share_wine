import SingleWineCard from "./singleWineCard";
import ReviewCard from "./reviewCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWines } from "../../store/wines";

const SingleWinePageContainer = ({ winos }) => {
  const dispatch = useDispatch();
  const testWines = useSelector((state) => Object.values(state.wines));

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  return (
    <>
      <SingleWineCard winos={winos} />
      <ReviewCard />
    </>
  );
};

export default SingleWinePageContainer;
