const express = require("express");
const {
  orderFood,
  getAllOrders,
  getOrderById,
  getOrdersByFoodId,
  getOrdersByTouristId,
} = require("./foodBooking.controller");

const foodBookingRoutes = express.Router();
foodBookingRoutes.post("/", orderFood);
foodBookingRoutes.get("/", getAllOrders);
foodBookingRoutes.get("/:orderId", getOrderById);
foodBookingRoutes.get("/get-orders-by-food/:foodId", getOrdersByFoodId);
foodBookingRoutes.get(
  "/get-orders-by-tourist/:touristId",
  getOrdersByTouristId
);
module.exports = foodBookingRoutes;
