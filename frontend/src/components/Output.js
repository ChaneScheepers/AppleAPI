// Import react
import React from "react";
// Import component
import Item from "./Item";

const Output = ({ output, fetchFavourites, favourites }) => {
  return (
    <div className="output-container">
      {output.results !== undefined ? (
        <>
          {output.resultCount !== 0 ? (
            <>
              <div className="output-items">
                {/* Map through the output and display each item */}
                {output &&
                  output.results.map((item) => (
                    <Item
                      item={item}
                      key={
                        // If there is a 'trackId' then use 'trackId' as the key...
                        item.trackId
                          ? item.trackId
                          : item.artistId && item.collectionId
                          ? Number(item.artistId) + Number(item.collectionId)
                          : item.artistId
                          ? item.artistId
                          : item.collectionId
                      }
                      fetchFavourites={fetchFavourites}
                      favourites={favourites}
                    />
                  ))}
              </div>
            </>
          ) : (
            <>
              {/* ...else show error text */}
              <div className="error-text">We could not find a match.</div>
            </>
          )}
        </>
      ) : (
        <>
          {/* ...else show welcome text */}
          <div className="welcome-text">
            Welcome! What would you like to search for?
          </div>
        </>
      )}
    </div>
  );
};

export default Output;
