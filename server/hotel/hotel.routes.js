const { isEmailUnique } = require("../middleware/emailUnique");
const {
  hotelSignup,
  getAllHotels,
  getHotelDataById,
  editHotel,
} = require("./hotel.controller");
const express = require("express");
const hotelRoutes = express.Router();

hotelRoutes.post("/signup", isEmailUnique, hotelSignup);
hotelRoutes.get("/getAllHotels", getAllHotels);
hotelRoutes.get("/getHotelById/:id", getHotelDataById);
hotelRoutes.patch("/updateHotel/:id", editHotel);
module.exports = hotelRoutes;
