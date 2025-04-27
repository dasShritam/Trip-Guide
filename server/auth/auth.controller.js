const { TouristModel } = require("../tourist/tourist.model");
const { USERS_TYPE } = require("../config/constant");
const { generateAccessToken } = require("../utils/handleToken");
const { comparePassword, hashPassword } = require("../utils/hanldePasswordEnc");
const { AgencyModel } = require("../agency/agency.model");
const { HotelModel } = require("../hotel/hotel.model");
const { TaxiModel } = require("../taxi/taxi.model");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    // admin 
    if (email === "admin@gmail.com" && password === "admin@123") {
      const token = generateAccessToken({
        email: "admin@gmail.com",
        role: USERS_TYPE.ADMIN,
        id: "admin",
      });
      return res.status(200).json({
        message: "Admin Login successfull",
        role: USERS_TYPE.ADMIN,
        token,
        id: "admin",
      });
    }
    // tourist
    const tourist = await TouristModel.findOne({ email });

    if (tourist) {
      const isPasswordCorrect = await comparePassword(
        password,
        tourist.password
      );
      if (!isPasswordCorrect) {
        return res.status(404).json({
          message: "Email id or password is incorrect",
        });
      }

      if (tourist && tourist.activeStatus === false) {
        return res.status(400).json({
          message: "Your account has been deactivated."
        })
      }
      const touristCopy = tourist.toObject();
      delete touristCopy.password;
      const { TOURIST } = USERS_TYPE;
      const token = generateAccessToken(touristCopy);
      return res.status(200).json({
        message: "Tourist Login successfull",
        role: TOURIST,
        token,
        id: touristCopy._id,
      });
    }
    //agency
    const agency = await AgencyModel.findOne({ email });
    if (agency) {
      const isPasswordCorrect = await comparePassword(
        password,
        agency.password
      );
      if (!isPasswordCorrect) {
        return res.status(404).json({
          message: "Email id or password is incorrect",
        });
      }

      
      const agencyCopy = agency.toObject();
      delete agencyCopy.password;
      const { AGENCY } = USERS_TYPE;
      const token = generateAccessToken(agencyCopy);
      return res.status(200).json({
        message: "Agency Login successfull",
        role: AGENCY,
        token,
        id: agencyCopy._id,
      });
    }
    // hotel 
    const hotel = await HotelModel.findOne({ email });
    if (hotel) {
      const isPasswordCorrect = await comparePassword(password, hotel.password);
      if (!isPasswordCorrect) {
        return res.status(404).json({
          message: "Email id or password is incorrect",
        });
      }

      const hotelCopy = hotel.toObject();
      delete hotelCopy.password;
      const { HOTEL } = USERS_TYPE;
      const token = generateAccessToken(hotelCopy);
      return res
        .status(200)
        .json({
          message: "Hotel Login successfull",
          role: HOTEL,
          token,
          id: hotelCopy._id,
        });
    }

    // taxi
    const taxi = await TaxiModel.findOne({ email });
    if (taxi) {
      const isPasswordCorrect = await comparePassword(password, taxi.password);
      if (!isPasswordCorrect) {
        return res.status(404).json({
          message: "Email id or password is incorrect",
        });
      }

      const taxiCopy = taxi.toObject();
      delete taxiCopy.password;
      const { TAXI } = USERS_TYPE;
      const token = generateAccessToken(taxiCopy);
      return res.status(200).json({
        message: "Taxi Login successfull",
        role: TAXI,
        token,
        id: taxiCopy._id,
      });
    }


    // no user matched so ending the resposne
    return res.status(404).json({
      message: "Email id or password is incorrect.",
    });
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    //todo => add other users model type here.
    //tourist
    const tourist = await TouristModel.findOne({ email });
    if (tourist) {
      const isOldPasswordSame = await comparePassword(
        password,
        tourist.password
      );
      if (isOldPasswordSame) {
        return res
          .status(400)
          .json({ message: "You can't resue old password." });
      }
      const myNewPassword = await hashPassword(password);
      tourist.password = myNewPassword;

      await tourist.save();
      return res
        .status(200)
        .json({ message: "Password changed successfully." });
    }
    //agency
    const agency = await AgencyModel.findOne({ email });
    if (agency) {
      const isOldPasswordSame = await comparePassword(
        password,
        agency.password
      );
      if (isOldPasswordSame) {
        return res
          .status(400)
          .json({ message: "You can't resue old password." });
      }
      const myNewPassword = await hashPassword(password);
      agency.password = myNewPassword;

      await agency.save();
      return res
        .status(200)
        .json({ message: "Password changed successfully." });
    }

    // hotel
    const hotel = await HotelModel.findOne({ email });
    if (hotel) {
      const isOldPasswordSame = await comparePassword(password, hotel.password);
      if (isOldPasswordSame) {
        return res
          .status(400)
          .json({ message: "You can't resue old password." });
      }
      const myNewPassword = await hashPassword(password);
      hotel.password = myNewPassword;

      await hotel.save();
      return res
        .status(200)
        .json({ message: "Password changed successfully." });
    }

    // taxi
    const taxi = await TaxiModel.findOne({ email });
    if (taxi) {
      const isOldPasswordSame = await comparePassword(password, taxi.password);
      if (isOldPasswordSame) {
        return res
          .status(400)
          .json({ message: "You can't resue old password." });
      }
      const myNewPassword = await hashPassword(password);
      taxi.password = myNewPassword;

      await taxi.save();
      return res
        .status(200)
        .json({ message: "Password changed successfully." });
    }
    return res.status(404).json({ message: "Please check your email" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  login,
  forgotPassword,
};
