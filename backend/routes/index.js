const express = require("express");
const axios = require("axios");

//api
const router = express.Router();

router.use(express.json());
// Create an empty array containing objects. Each object will represent an item
let favourites = [];

// Handler for the GET request
getFavouritesHandler = (req, res) => {
  if (favourites.length === 0) {
    res.send({
      message: "You have no favourites to display",
    });
  } else {
    res.send({
      favourites,
    });
  }
};

// GET - displays all the items within the favourites array
router.get("/", getFavouritesHandler);

postFavouritesHandler = (req, res) => {
  // Create unique id
  const id = Math.floor(100000 + Math.random() * 900000);

  // Create a new item
  newItem = Object.assign(req.body);
  // Add the new item to the existing items
  favourites.push(newItem);
  console.log(favourites);

  // Display message and all the items
  return res.send({
    message: "Item added successfully",
    favourites,
  });
};

// POST - adds an item to the favourites array
router.post("/add", postFavouritesHandler);

// Handler for the DELETE request
deleteFavouritesHandler = (req, res) => {
  // Find id in URL
  const id = Number(req.params.id);

  // Loop through the items and splice the item specified
  for (let i = 0; i < favourites.length; i++) {
    if (favourites[i].id === id) {
      favourites.splice(i, 1);
    }
    console.log(favourites);
  }

  // Display message and all the items
  res.send({
    message: `Item with id ${id} has been deleted`,
    favourites,
  });
};

// DELETE - removes a specific item from favourites.json
router.delete("/delete/:id", deleteFavouritesHandler);

module.exports = router;
