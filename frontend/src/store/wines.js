// Define Action Types as Constants
const SET_WINES = "wines/SET_WINES";

// DEFINE ACTION CREATORS
const setWines = (wines) => ({
  type: SET_WINES,
  wines,
});

// Define Thunks
export const getWines = () => async (dispatch) => {
  const res = await fetch("./api/wine");
  const wines = await res.json();
  dispatch(setWines(wines));
};

// Set the inital state
const initalState = {};

// Define a reducer
// normalizaing state by turning the array to object on line 26. Using an array is slow to turn to o(n).
const wineReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_WINES:
      const newState = { ...state };
      action.wines.forEach((wine) => {
        newState[wine.id] = wine;
      });
      return newState;
    default:
      return state;
  }
};

export default wineReducer;
