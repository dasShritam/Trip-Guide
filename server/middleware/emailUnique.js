const { AgencyModel } = require("../agency/agency.model");
const { HotelModel } = require("../hotel/hotel.model");
const { TaxiModel } = require("../taxi/taxi.model");
const { TouristModel } = require("../tourist/tourist.model");
const isEmailUnique = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    

    const agency = await AgencyModel.findOne({ email });
    const tourist = await TouristModel.findOne({ email });
    const hotel = await HotelModel.findOne({ email });
    const taxi = await TaxiModel.findOne({ email });

    if (tourist || hotel || agency || taxi || email === "admin@gmail.com") {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { isEmailUnique };
