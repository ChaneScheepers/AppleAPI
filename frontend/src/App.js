//Import features
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Home from "./components/Home";
import Favourites from "./components/FavouriteList";

// Import CSS & bootstrap
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [favourites, setFavourites] = useState(); // useState to save the list of favourites

  function saveItems(items) {
    sessionStorage.setItem("SAVE_FOR_LATER", JSON.stringify(items));
  }
  //function that gets items
  function getSavedItems() {
    const safeForLaterData = sessionStorage.getItem("SAVE_FOR_LATER");
    return safeForLaterData !== null ? JSON.parse(safeForLaterData) : [];
  }

  // Function to fetch the list of favourites
  const fetchFavourites = async () => {
    const result = await fetch("http://localhost:2000/api/");
    const data = await result.json();
    sessionStorage.clear();
    saveItems(data.favourites);

    setFavourites(data.favourites);
    console.log(favourites);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home fetchFavourites={fetchFavourites} favourites={favourites} />
            }
          />

          {/* Route to go to 'Favourites' */}
          <Route
            path="/favourites"
            element={
              <Favourites
                fetchFavourites={fetchFavourites}
                favourites={favourites}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
