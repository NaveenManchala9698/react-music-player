import React from "react";
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/actions";


const Song = ({ track }) => {

  const favourites = useSelector((state) => state.favourites)

  const dispatch = useDispatch()

  const isFav = favourites.includes(track.title)
  const toggleFav = () => {
    isFav
      ? dispatch(removeFavourite(track.title))
      : dispatch(addFavourite(track.title))
  }

  return (
    <div className="py-3 trackHover">
      <span className="heart" style={{ color: "white" }}>
        {isFav ?
          (<HeartFill color="green" onClick={toggleFav}/>)
          : (<Heart color="white" onClick={toggleFav}/>)
        }

      </span>
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>

    </div>
  );
}
export default Song;
