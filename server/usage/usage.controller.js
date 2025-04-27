const { TouristModel } = require("../tourist/tourist.model");
const { PackageModel } = require("../package/package.model");
const { HotelModel } = require("../hotel/hotel.model");
const { TaxiModel } = require("../taxi/taxi.model");
const { FoodItemModel } = require("../food/food.model");
const { HotelBooking } = require("../hotelBooking/hotelBooking.model");
const { PackageBooking } = require("../packageBooking/packageBooking.model");
const { TaxiBookingModel } = require("../taxiBooking/taxiBooking.model");
const { FoodBookingModel } = require("../foodBooking/foodBooking.model");
const RoomModel = require("../rooms/rooms.model");
const collectionsLength = async (req, res, next) => {
  try {
    const touristCount = await TouristModel.countDocuments();
    const packageCount = await PackageModel.countDocuments();
    const hotelCount = await HotelModel.countDocuments();
    const taxiCount = await TaxiModel.countDocuments();
    const foodCount = await FoodItemModel.countDocuments();
    const hotelBookingCount = await HotelBooking.countDocuments();
    const packageBookingCount = await PackageBooking.countDocuments();
    const taxiBookingCount = await TaxiBookingModel.countDocuments();
    const foodBookingCount = await FoodBookingModel.countDocuments();
    const roomCount = await RoomModel.countDocuments();
    const data = {
      touristCount,
      packageCount,
      hotelCount,
      taxiCount,
      foodCount,
      hotelBookingCount,
      packageBookingCount,
      taxiBookingCount,
      foodBookingCount,
      roomCount
    };
    return res.status(200).json({data: data, message: "success"});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  collectionsLength,
};
