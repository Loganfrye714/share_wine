// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import WineContainer from "./components/HomePage/Wines/wines";
import ReviewContainer from "./components/Review/index";
import WishlistContainer from "./components/Wishlist/wishlist";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <Route path="/wines" exact>
            <WineContainer />
          </Route>
          <Route path="/:id" exact>
            <ReviewContainer />
          </Route>
          <Route path="/Wishlist/:id" exact>
            <WishlistContainer />
          </Route>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
