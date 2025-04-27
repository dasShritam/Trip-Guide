const express = require("express");
const {
  addRating,
  getAllRating,
  getAllRatingByTaxiId,
} = require("./rateTaxi.controller");
const taxiRatingRoutes = express.Router();

taxiRatingRoutes.post("/", addRating);
taxiRatingRoutes.get("/", getAllRating);
taxiRatingRoutes.get("/taxi/:id", getAllRatingByTaxiId);

module.exports = taxiRatingRoutes;
