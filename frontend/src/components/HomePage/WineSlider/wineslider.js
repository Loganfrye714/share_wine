import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWines } from "../../../store/wines";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./wineslider.css";

const ImageSlider = () => {
  const dispatch = useDispatch();
  const wines = useSelector((state) => Object.values(state.wines));

  const [current, setCurrent] = useState(0);
  const length = wines.length;

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <div className="slider">
      <ArrowBackIcon className="slider_left-arrow" onClick={prevSlide} />
      {wines.map((wine, index) => (
        <>
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                className="image"
                src={wine.img_url}
                key={wine.id}
                alt="wines"
              />
            )}
          </div>
        </>
      ))}
      <ArrowForwardIcon className="slider_right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default ImageSlider;
