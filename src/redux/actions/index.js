export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const PLAYER_SONG = "PLAYER_SONG";

export const addFavourite = (song) => ({
  type: ADD_FAVOURITE,
  payload: song,
});

export const removeFavourite = (song) => ({
  type: REMOVE_FAVOURITE,
  payload: song,
});

export const playerSong = (track) => ({
  type: PLAYER_SONG,
  payload: track,
});
