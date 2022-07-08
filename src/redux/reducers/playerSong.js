import { PLAYER_SONG } from "../actions";

const initialState = {
  PlayerSong: {},
};

export const playerSongReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PLAYER_SONG:
      return {
        ...state,
        PlayerSong: payload,
      };
    default:
      return state;
  }
};

export default playerSongReducer;
