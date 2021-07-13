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

  // if the current number reaches the end of the array (length - 1) then set current to the beginning else current + 1
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

// if current is === 0 (original image) set the length - 1 else subtract one
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  return (
    <div className="slider">
      <ArrowBackIcon className="slider_left-arrow" onClick={prevSlide} />
      {wines.map((wine, index) => (
        <>
          <div className="allwines__grid" key={index}>
            {index === current && (
              <>
                <div className="wine__card">
                  <img
                    id="allwines__image"
                    src={wine.img_url}
                    key={wine.id}
                    alt="wines"
                  />
                  <div className="wine__cardInfo">
                    <h2>{wine.name}</h2>
                    <h4>{wine.location}</h4>
                    <h4>
                      {wine.grape} {wine.vintage}
                    </h4>
                    <h4>${wine.price}</h4>
                    <button id="wine__cardButton">Reserve</button>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="allwines__grid" key={index + 1}>
            {index === current + 1 && (
              <>
                <div className="wine__card">
                  <img
                    id="allwines__image"
                    src={wine.img_url}
                    key={wine.id}
                    alt="wines"
                  />
                  <div className="wine__cardInfo">
                    <h2>{wine.name}</h2>
                    <h4>{wine.location}</h4>
                    <h4>
                      {wine.grape} {wine.vintage}
                    </h4>
                    <h4>${wine.price}</h4>
                    <button id="wine__cardButton">Reserve</button>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="allwines__grid" key={index + 1}>
            {index === current + 2 && (
              <>
                <div className="wine__card">
                  <img
                    id="allwines__image"
                    src={wine.img_url}
                    key={wine.id}
                    alt="wines"
                  />
                  <div className="wine__cardInfo">
                    <h2>{wine.name}</h2>
                    <h4>{wine.location}</h4>
                    <h4>
                      {wine.grape} {wine.vintage}
                    </h4>
                    <h4>${wine.price}</h4>
                    <button id="wine__cardButton">Reserve</button>
                  </div>
                </div>
              </>
            )}
          </div>
                    <div className="allwines__grid" key={index + 1}>
            {index === current + 3 && (
              <>
                <div className="wine__card">
                  <img
                    id="allwines__image"
                    src={wine.img_url}
                    key={wine.id}
                    alt="wines"
                  />
                  <div className="wine__cardInfo">
                    <h2>{wine.name}</h2>
                    <h4>{wine.location}</h4>
                    <h4>
                      {wine.grape} {wine.vintage}
                    </h4>
                    <h4>${wine.price}</h4>
                    <button id="wine__cardButton">Reserve</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      ))}
      <ArrowForwardIcon className="slider_right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default ImageSlider;
