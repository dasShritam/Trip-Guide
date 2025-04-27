const express = require("express");
const {
  addHotelBooking,
  getBookingsByTouristId,
  getAllBookings,
  getBookingsByHotelId,

} = require("./hotelBooking.controller");
const roomsBookingRoutes = express.Router();
roomsBookingRoutes.post("/add-hotel-booking", addHotelBooking);
roomsBookingRoutes.get("/tourist/:touristId", getBookingsByTouristId);
roomsBookingRoutes.get("/hotel/:hotelId", getBookingsByHotelId);
roomsBookingRoutes.get("/all", getAllBookings);
module.exports = roomsBookingRoutes;
