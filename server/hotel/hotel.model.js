const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: [true, "hotel Name is required"],
      minLength: [2, "Min. 2 characters required"],
    },
    hotelLocation: {
      type: String,
      required: [true, "hotel location is required"],
      minLength: [2, "Min. 2 characters required"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10}$/, "Phone Number must be 10 digits"],
    },
    email: {
      type: String,
      required: [true, "Email id is required."],
      unique: [true, "Email id should be unique"],
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
    },
  },
  {
    timestamps: true,
  }
);
const HotelModel = mongoose.model("hotel", hotelSchema);

module.exports = {
  HotelModel,
};