import React from "react";
import axios from "axios";

// Import items from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash as faSolidTrash } from "@fortawesome/free-solid-svg-icons";

const FavItem = ({ item, fetchFavourites }) => {
  //Remove item from 'fav' (api call and function)

  // Function that handles removing an item from 'favourites'
  const handleRemove = (e) => {
    e.preventDefault();
    // setILikeThis(false);
    const response = axios
      .delete(`http://localhost:2000/api/delete/${item.id}`)
      .then((data) => {
        console.log(data);
        fetchFavourites();
      });
  };


  /*The below codes is a conditional statement indicating if a 
  (image, collection name or type exists to display it, else use text)*/
  return (
    <div className="fav-item">
      {/* --------------------------------------------------------- */}
      {/* Image */}
      <div className="img">
        {item.favItem.artworkUrl100 ? (
          <img src={item.favItem.artworkUrl100} alt="media artwork" />
        ) : (
          <div className="img-text">No image</div>
        )}
      </div>
      {/* --------------------------------------------------------- */}
      {/*'trackName' /'collectionName'*/}
      <div className="item-info">
        {!item.favItem.trackName ? (
          <div className="collection-name">
            <span>Name:</span> {item.favItem.collectionName}
          </div>
        ) : (
          <div className="track-name">
            <span>Name:</span> {item.favItem.trackName}
          </div>
        )}
        <div className="artist-name">
          <span>Artist:</span> {item.favItem.artistName}
        </div>
        {/* --------------------------------------------------------- */}
        {/* 'kind' */}
        {item.favItem.kind ? (
          <div className="kind">
            <span>Type:</span> {item.favItem.kind}
          </div>
        ) : (
          <div className="wrapper-type">
            <span>Type:</span> {item.favItem.wrapperType}
          </div>
        )}
      </div>
      <div className="btns">
        <div className="remove-btn">
          <button onClick={handleRemove}>
            <FontAwesomeIcon icon={faSolidTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavItem;
