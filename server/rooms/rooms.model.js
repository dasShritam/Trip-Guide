const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
      required: true,
    },

    totalRooms: {
      type: Number,
      required: true,
    },
    acRooms: {
      type: Number,
      required: true,
    },
    nonAcRooms: {
      type: Number,
      required: true,
    },

    // Pricing
    acRoomPrice: {
      type: Number,
      required: true,
    },
    nonAcRoomPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    checkInTime: {
      type: String,
      default: "19:00 AM",
    },
    checkOutTime: {
      type: String,
      default: "11:00 PM",
    },
    roomImg: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const RoomModel = mongoose.model("Room", roomSchema);

module.exports = RoomModel;
