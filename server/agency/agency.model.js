const mongoose = require("mongoose");

const agencySchema = mongoose.Schema(
  {
    agencyName: {
      type: String,
      required: [true, "Agency Name is required"],
      minLength: [2, "Min. 2 characters required"],
    },
    agencyAddress: {
      type: String,
      required: [true, "Agency address is required"],
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
    activeStatus: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);
const AgencyModel = mongoose.model("Agency", agencySchema);

module.exports = {
  AgencyModel,
};