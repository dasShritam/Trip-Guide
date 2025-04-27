const mongoose = require("mongoose");
const topDestinationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TopDestinationModel = mongoose.model(
  "TopDestination",
  topDestinationSchema
);

module.exports = {
  TopDestinationModel,
};
