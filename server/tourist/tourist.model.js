const mongoose = require("mongoose");

const touristSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [2, "Name must be atleast 2 characters long."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email ID is required"],
      match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Gender is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required."],
      match: [/^\d{10}$/, "Phone Number must be 10 digits"],
    },
    idType: {
      type: String,
      enum: {
        values: [
          "Aadhaar Card",
          "Passport",
          "Driving License",
          "Voter ID",
          "PAN Card",
        ],
        message: "{VALUE} ID is not allowed",
      },
      required: true,
    },
    idPhoto: {
      required: [true, "ID Photo is required"],
      type: String,
    },

    touristPhoto: {
      type: String,
      required: [true, "Photo is required"],
    },
    activeStatus: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);
const TouristModel = mongoose.model("Tourist", touristSchema);
module.exports = { TouristModel };
