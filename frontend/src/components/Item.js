// Import components from react
import React, { useEffect, useState } from "react";
import axios from "axios";

// Import items from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const Item = ({ item, fetchFavourites, favourites }) => {
  // UseState to save wether the item has been added to favourites or not
  const [iLikeThis, setILikeThis] = useState(false);

  // Function set Id of item
  const id = item.trackId
    ? item.trackId
    : item.artistId && item.collectionId
    ? Number(item.artistId) + Number(item.collectionId)
    : item.artistId
    ? item.artistId
    : item.collectionId;

  // Function that handles the adding of the item to 'favourites'
  const handleAdd = (e) => {
    e.preventDefault();
    setILikeThis(true);
    const response = axios
      .post(`http://localhost:2000/api/add`, {
        id,
        favItem: item,
      })
      .then((data) => {
        console.log(data.data);
        fetchFavourites();
      });
  };

  // Function that handles removing an item from 'favourites'
  const handleRemove = (e) => {
    e.preventDefault();
    setILikeThis(false);
    const response = axios
      .delete(`http://localhost:2000/api/delete/${id}`)
      .then((data) => {
        console.log(data);
        fetchFavourites();
      });
  };

  //Checks to see if item has already been added to 'favourites'.
  useEffect(() => {
    if (favourites && favourites !== undefined) {
      for (let i = 0; i < favourites.length; i++) {
        if (favourites[i].id === id) {
          setILikeThis(true);
        }
      }
    }
  }, [favourites, id]);

  return (
    <div className="output-item">
      {/* Conditional statements, if info exists, diplay: */}
      <div className="img">
        {/* artwork / text */}
        {item.artworkUrl100 ? (
          <img src={item.artworkUrl100} alt="media artwork" />
        ) : (
          <div className="img-text">No image</div>
        )}
      </div>
      <div className="item-info">
        {/* --------------------------------------------------------- */}
        {/* 'trackName' / 'collectionName' */}
        {!item.trackName ? (
          <div className="collection-name">
            <span>Name:</span> {item.collectionName}
          </div>
        ) : (
          <div className="track-name">
            <span>Name:</span> {item.trackName}
          </div>
        )}
        <div className="artist-name">
          <span>Artist:</span> {item.artistName}
        </div>
        {/* --------------------------------------------------------- */}
        {/*'kind' / 'wrapperType' */}
        {item.kind ? (
          <div className="kind">
            <span>Type:</span> {item.kind}
          </div>
        ) : (
          <div className="wrapper-type">
            <span>Type:</span> {item.wrapperType}
          </div>
        )}
      </div>
      {/* --------------------------------------------------------- */}
      {/* Like button, conditional*/}
      <div className="btns">
        <div className="heart-btn">
          {iLikeThis ? (
            <button
              onClick={(e) => {
                handleRemove(e);
              }}
            >
              <FontAwesomeIcon icon={faSolidHeart} className="clicked" />
            </button>
          ) : (
            <button
              onClick={(e) => {
                handleAdd(e);
              }}
            >
              <FontAwesomeIcon icon={faSolidHeart} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
