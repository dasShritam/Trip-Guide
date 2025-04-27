const mongoose = require("mongoose");
const packageSchema = mongoose.Schema(
  {
    packageName: {
      required: [true, "Package Name is required."],
      type: String,
    },
    packageDescription: {
      required: [true, "Description is required."],
      type: String,
    },
    packageType: {
      enum: [
        "Adventure",
        "Honeymoon",
        "Family",
        "Group",
        "Solo",
        "Couple",
        "Luxury",
        "Other",
      ],
      required: [true, "Package Type is required."],
      type: String,
    },
    destination: {
      required: [true, "Destination is required."],
      type: String,
    },
    costPerHead: {
      required: [true, "Cost per head is required."],
      type: Number,
      min: 0,
    },
    startingDate: {
      required: [true, "Starting Date is required."],
      type: String,
    },
    days: {
      required: [true, "Number of days is required."],
      type: Number,
    },
    nights: {
      required: [true, "Number of nights is required."],
      type: Number,
    },
    totalAvailableSeats: {
      type: Number,
      required: [true, "Number of total available seats is required."],
    },
    packagePhoto: {
        type: String,
        required: [true, "Package photo is required."],
    },
    agencyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency",
        required: [true, "Agency Id is required."],
    },
    rating: {
      type: Number,
      default: 0,
    },
    review: {
      type: [],
      default: [],
    },
    bookedTourists: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tourist",
        },
      ],
      default: [],
    }, 
  },
  {
    timestamps: true,
  }
);

const PackageModel = mongoose.model("Package", packageSchema);
module.exports = { PackageModel };
