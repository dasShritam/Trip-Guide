const { hashPassword } = require("../utils/hanldePasswordEnc");
const { HotelModel } = require("./hotel.model");

const hotelSignup = async (req, res, next) => {
  try {
    const { hotelName, hotelLocation, password, email, phoneNumber } = req.body;
    const hashedPassword = await hashPassword(password);
    const hotel = new HotelModel({
      hotelLocation,
      hotelName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await hotel.save();
    return res.status(201).json({
      message: "hotel registration completed successfully",
      data: hotel,
    });
  } catch (error) {
    next(error);
  }
};

const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await HotelModel.find();
    return res
      .status(200)
      .json({ data: hotels, message: "All hotels fetched successfully" });
  } catch (error) {
    next(error);
  }
};

const getHotelDataById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const hotel = await HotelModel.findById(id);
    return res
      .status(200)
      .json({ data: hotel, message: "Hotel fetched successfully" });
  } catch (error) {
    next(error);
  }
};

const editHotel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const hotel = await HotelModel.findById(id);
    const { email, hotelName, phoneNumber, hotelLocation } = req.body;
    
    hotel.email = email;
    hotel.hotelName = hotelName;
    hotel.phoneNumber = phoneNumber;
    hotel.hotelLocation = hotelLocation;
    await hotel.save();
    return res
      .status(200)
      .json({ data: hotel, message: "Hotel fetched successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  hotelSignup,
  getAllHotels,
  getHotelDataById,
  editHotel,
};
