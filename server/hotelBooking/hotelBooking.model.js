const mongoose = require("mongoose");

const hotelBookingSchema = mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
      required: [true, "Hotel id is required."],
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tourist",
      required: [true, "Tourist id is required."],
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: [true, "Room id is required"],
    },
    roomType: {
      type: String,
      enum: ["AC", "NON-AC"],
      required: true,
    },
    checkInDate: {
      type: String,
      required: true,
    },
    checkOutDate: {
      type: String,
      required: true,
    },
    accountHolderName: {
      type: String,
      required: [true, "Account holder name is required."],
    },
    accountNumber: {
      type: String,
      required: [true, "Account number is required."],
    },
    expiryDate: {
      type: String,
      required: [true, "Expiry date is required."],
    },
    cvv: {
      type: String,
      required: [true, "CVV is required."],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const HotelBooking = mongoose.model("HotelBooking", hotelBookingSchema);
module.exports = { HotelBooking };
