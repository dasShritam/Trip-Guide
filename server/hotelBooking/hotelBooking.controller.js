const { HotelBooking } = require("./hotelBooking.model");

const addHotelBooking = async (req, res, next) => {
  try {
    const {
      hotelId,
      touristId,
      roomId,
      accountHolderName,
      accountNumber,
      expiryDate,
      cvv,
      roomType,
      checkInDate,
      checkOutDate
    } = req.body;
    if (!hotelId || !touristId || !roomId || !roomType || !checkInDate || !checkOutDate) {
      return res.status(400).json({
        message: "Hotel id, tourist id and room id are required.",
      });
    }
    const hotelBooking = new HotelBooking({
      hotelId,
      touristId,
      roomId,
      roomType,
      checkInDate,
      checkOutDate,
      accountHolderName,
      accountNumber,
      expiryDate,
      cvv,
    });
    await hotelBooking.save();
    return res.status(201).json({
      message: "Hotel booked successfully",
      data: hotelBooking,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await HotelBooking.find()
      .populate("hotelId")
      .populate("touristId")
      .populate("roomId")
      .exec();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

const getBookingsByTouristId = async (req, res, next) => {
  try {
    const { touristId } = req.params;
    if (!touristId) {
      return res.status(400).json({ message: "Tourist id is required." });
    }
    const bookings = await HotelBooking.find({ touristId })
      .populate("hotelId")
      .populate("roomId")
      .exec();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

const getBookingsByHotelId = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const bookings = await HotelBooking.find({ hotelId })
      .populate("hotelId")
      .populate("roomId")
      .populate("touristId")
      .exec();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBookings,
  addHotelBooking,
  getBookingsByTouristId,
  getBookingsByHotelId,
};

