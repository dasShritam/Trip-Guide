const express = require("express");
const {
  destinationImages,
  addTouristPlace,
  getAllDestination,
  deleteDestination,
} = require("./topDestinatations.controller");
const destinationRoutes = express.Router();

destinationRoutes.post("/add", destinationImages, addTouristPlace);
destinationRoutes.get("/get-all", getAllDestination);
destinationRoutes.delete("/:id", deleteDestination);

module.exports = destinationRoutes;
