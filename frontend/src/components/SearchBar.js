import React from "react";
import { Link } from "react-router-dom";

// Import react-bootstrap components
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";

const SearchContainer = ({
  handleSubmit,
  term,
  handleTermChange,
  handleMediaChange,
}) => {
  // takes all variable for api and renamed for better look and feel
  const media = [
    { type: "All media", value: "all" },
    { type: "Movie", value: "movie" },
    { type: "Podcast", value: "podcast" },
    { type: "Music", value: "music" },
    { type: "Music video", value: "musicVideo" },
    { type: "Audio book", value: "audiobook" },
    { type: "Short film", value: "shortFilm" },
    { type: "TV show", value: "tvShow" },
    { type: "Software", value: "software" },
    { type: "Ebook", value: "ebook" },
  ];

  return (
    <div className="search-container">
      {/* On form submit run 'handleSubmit' */}
      <Form onSubmit={handleSubmit}>
        <FormGroup className="form-group search-box">
          {/* Search box where a term is entered that the user wants to search for */}
          <FormControl
            type="text"
            className="search-bar"
            placeholder="Search here..."
            name="term"
            value={term}
            onChange={handleTermChange}
          />
        </FormGroup>
        <FormGroup className="form-group filter">
          <FormSelect onChange={handleMediaChange}>
            {media &&
              media.map((media) => (
                <option key={media.value} value={media.value}>
                  {media.type}
                </option>
              ))}
          </FormSelect>
        </FormGroup>
        <FormGroup className="submit-btn">
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </FormGroup>
        <div className="favourite-btn">
          <Link to="/favourites">
            <Button className="btn btn-success">Favourites</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SearchContainer;
