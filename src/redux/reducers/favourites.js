import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions";

const initialState = {
  favourites: [],
};

export const favouritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((song) => song !== payload),
      };
    default:
      return state;
  }
};
export default favouritesReducer;
