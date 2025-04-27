const mongoose = require("mongoose");
const { taxiRequets } = require("./taxiBooking.controller");

const taxiBookingScheama = mongoose.Schema(
  {
    taxiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Taxi",
      default: null,
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tourist",
    },
    pickUpLocation: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    travelDistance: {
      type: Number,
      required: true,
    },
    pickUpDateTime: {
      type: String,
      required: true,
    },
    totalFare: {
      type: String,
      required: true
    },
    taxiDriverStatus: {
      type: String,
      enum: ["pending", "accepted", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const TaxiBookingModel = mongoose.model("TaxiBooking", taxiBookingScheama);
module.exports = { TaxiBookingModel };
