import { useEffect, useState } from "react";
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

  if (wines.length > 1) {
    window.location.reload();
  }

  if (wines.length < 2) {
    return (
      <div>
        <div>
          {wines.map((wine) => (
            <>
              <h2>HELLO!!!</h2>
              <div>
                <img
                  id="allwines__image"
                  src={wine.img_url}
                  key={wine.id}
                  alt="wines"
                />
              </div>
              4
            </>
          ))}
        </div>
      </div>
    );
  }
};

export default ReviewContainer;
