const mongoose = require("mongoose");

const taxiSchema = mongoose.Schema(
  {
    driverName: {
      type: String,
      required: [true, "Driver name is required"],
      minLength: [2, "Min. 2 characters required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required"],
      match: [/^\d{10}$/, "Contact number must be 10 digits"],
    },
    dutyArea: {
      type: String,
      required: [true, "Duty area is required"],
      minLength: [2, "Min. 2 characters required"],
    },
    chargePerKm: {
      type: Number,
      required: [true, "Charge per km is required"],
      min: 0,
    },
    workExperience: {
      type: Number,
      required: [true, "Work experience is required"],
      min: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const TaxiModel = mongoose.model("Taxi", taxiSchema);

module.exports = {
  TaxiModel,
};
