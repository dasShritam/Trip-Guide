const mongoose = require("mongoose");
const RateTaxiSchema = new mongoose.Schema(
  {
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tourist",
      required: true,
    },
    taxiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Taxi",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RateTaxiModel = mongoose.model("RateTaxi", RateTaxiSchema);
module.exports = { RateTaxiModel };
