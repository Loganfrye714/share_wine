import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { useParams } from "react-router-dom";

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const wines = useSelector((state) => Object.values(state.wines));
  useEffect(() => {
    dispatch(getOneWine(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        {wines.map((wine) => (
          <div>{wine.img_url}</div>
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;
