import React, { useState } from "react";
import axios from "axios";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import components
import FavItem from "./FavouriteItem";

const Favourites = ({ fetchFavourites, favourites}) => {

  return (
    <div className="favourites-container">
      {/* Header that contains back button*/}
      <div className="header-container">
        Favourite list
        <Link to="/">
          <Button className="btn btn-success">Back</Button>
        </Link>
      </div>
      {/* --------------------------------------------------------- */}
      <div className="favourites">
        {/* Map fav items, if fav does not exist display empty  */}
        {favourites === undefined ? (
          <div>Empty...</div>
        ) : (
          <div className="fav-items">
            {favourites &&
              favourites.map((item) => (
                <FavItem
                  item={item}
                  key={item.id}
                  fetchFavourites={fetchFavourites}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
