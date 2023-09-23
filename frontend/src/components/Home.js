// Import components from react
import React, { useState } from "react";
import axios from "axios";

// Import components
import Header from "./Header";
import SearchContainer from "./SearchBar";
import Output from "./Output";

//useState hooks for data
const Home = ({ fetchFavourites, favourites }) => {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");
  const [output, setOutput] = useState({});

  //Functions ---------------------------------------------------------------------
  // Call api using specific data from user.
  // Search F and possible empty input.
  const searchInputSubmit = (e) => {
    e.preventDefault();
    if (term === "") {
      alert(
        `You have not entered anything, please speficy what we should look for?`
      );
    }
    const feedback = axios
      .get(`http://localhost:2000/search?term=${term}&media=${media}`)
      .then((data) => {
        setOutput(data.data.response);

      })
      .catch((err) => console.log(err));
  };
  // Term F (collect data from user)
  const collectAndSetTerm = (e) => {
    setTerm(e.target.value);
  };
  // Medua F (collect data from user)
  const collectAndSetMedia = (e) => {
    setMedia(e.target.value);
  };

  return (
    <div className="home">
      <div className="search-container-section">
        <Header />

        <SearchContainer
          term={term}
          handleTermChange={collectAndSetTerm}
          handleMediaChange={collectAndSetMedia}
          handleSubmit={(e) => {
            searchInputSubmit(e);
          }}
        />
        <div className="output-container-section">
          <Output
            output={output}
            fetchFavourites={fetchFavourites}
            favourites={favourites}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
