const express = require("express");
const {
  calculateTaxiFare,
  taxiRequets,
  getAllTaxiBookingByTouristId,
  getAllTaxiBookings,
  getAllPendingTaxiBookings,
  acceptReqById,
  getAllDriverApprovedReqByTaxiId,
  paymentAcceptReqById,
  getBookingById,
} = require("./taxiBooking.controller");
const taxiBookingRoutes = express.Router();
taxiBookingRoutes.get("/getBookingById/:id", getBookingById)
taxiBookingRoutes.post("/fare-calculation", calculateTaxiFare);
taxiBookingRoutes.post("/taxi-request", taxiRequets);
taxiBookingRoutes.get("/by-tourist-id/:id", getAllTaxiBookingByTouristId);
taxiBookingRoutes.get("/getAllTaxiBookings", getAllTaxiBookings);
taxiBookingRoutes.get("/getAllPendingTaxiBookings", getAllPendingTaxiBookings);
taxiBookingRoutes.patch("/accept/:id", acceptReqById);
taxiBookingRoutes.patch("/payment-accept/:id", paymentAcceptReqById);
taxiBookingRoutes.get("/getAllDriverApprovedReqByTaxiId/:id", getAllDriverApprovedReqByTaxiId);
module.exports = taxiBookingRoutes;
