const mongoose = require("mongoose");

const foodBookingScheama = mongoose.Schema(
  {
    orderId: {
      required: true,
      type: String,
    },
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodItem",
      required: true,
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tourist",
    },
    dateAndTime: {
      type: String,
      required: true,
    },
    noOfPersons: {
      type: Number,
      required: true,
    },
    accountHolderName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: String,
      required: true,
    },
    orderStatus: {
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

const FoodBookingModel = mongoose.model("FoodBooking", foodBookingScheama);
module.exports = { FoodBookingModel };
