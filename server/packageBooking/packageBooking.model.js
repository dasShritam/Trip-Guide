const mongoose = require("mongoose");

const packageBookingSchema = mongoose.Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: [true, "Package id is required."],
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tourist",
      required: [true, "Tourist id is required."],
    },
    agencyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      required: [true, "Agency id is required"],
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

const PackageBooking = mongoose.model("PackageBooking", packageBookingSchema);
module.exports = { PackageBooking };
