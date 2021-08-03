import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneWine } from "../../store/wines";
import { useParams, useHistory } from "react-router-dom";
import { findWishlist } from "../../store/wishlist";

const WishlistContainer = () => {
  return <div>HELLO!</div>;
};

export default WishlistContainer;
