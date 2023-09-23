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

  // Function to fetch the list of favourites
  const fetchFavourites = async () => {
    const result = await fetch("http://localhost:2000/api/");
    const data = await result.json();
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
