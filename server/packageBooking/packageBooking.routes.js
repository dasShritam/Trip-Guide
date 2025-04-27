const express = require("express");
const {
  addPackageBooking,
  getBookingsByTouristId,
  getBookingsByAgencyId,
  getAllBookings,
  getBookingsByPackageId,
} = require("./packageBooking.controller");
const packageBookingRoutes = express.Router();
packageBookingRoutes.post("/add-package-booking", addPackageBooking);
packageBookingRoutes.get("/tourist/:touristId", getBookingsByTouristId);
packageBookingRoutes.get("/package/:packageId", getBookingsByPackageId);
packageBookingRoutes.get("/agency/:agencyId", getBookingsByAgencyId);
packageBookingRoutes.get("/all", getAllBookings);
module.exports = packageBookingRoutes;
