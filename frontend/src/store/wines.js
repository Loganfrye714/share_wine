// Define Action Types as Constants
const SET_WINES = "wines/SET_WINES";
const GET_ONE_WINE = "wine/SET_ONE_WINE";

// DEFINE ACTION CREATORS
const setWines = (wines) => ({
  type: SET_WINES,
  wines,
});

const setOneWine = (wine) => ({
  type: GET_ONE_WINE,
  wine,
});

// Define Thunks
export const getWines = () => async (dispatch) => {
  const res = await fetch("./api/wine");
  const wines = await res.json();
  dispatch(setWines(wines));
};

export const getOneWine = (id) => async (dispatch) => {
  const res = await fetch(`./api/wine/${id}`);
  const oneWine = await res.json();
  dispatch(setOneWine(oneWine));
};

// Set the inital state
const initalState = {};

// Define a reducer
// normalizaing state by turning the array to object on line 26. Using an array is slow to turn to o(n).
const winesReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_WINES:
      const newState = { ...state };
      action.wines.forEach((wine) => {
        newState[wine.id] = wine;
      });
      return newState;
    case GET_ONE_WINE: {
      const newState = { ...state };
      newState[action.wine.id] = action.wine;
      return newState;
    }
    default:
      return state;
  }
};

export default winesReducer;
