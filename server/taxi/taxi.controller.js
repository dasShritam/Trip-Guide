const { hashPassword } = require("../utils/hanldePasswordEnc");
const { TaxiModel } = require("./taxi.model");
const signup = async (req, res, next) => {
  try {
    const {
      driverName,
      chargePerKm,
      contactNo,
      dutyArea,
      email,
      password,
      workExperience,
    } = req.body;

    if (
      !driverName ||
      !chargePerKm ||
      !contactNo ||
      !dutyArea ||
      !email ||
      !password ||
      !workExperience
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await hashPassword(password);

    const taxi = new TaxiModel({
      driverName,
      chargePerKm,
      contactNo,
      dutyArea,
      email,
      password: hashedPassword,
      workExperience,
    });
    await taxi.save();
    return res.status(201).json({ message: "Taxi driver registered" });
  } catch (error) {
    next(error);
  }
};

const getAllTaxies = async (req, res, next) => {
  try {
    const taxis = await TaxiModel.find();
    return res
      .status(200)
      .json({ message: "Taxis fetched successfully", data: taxis });
  } catch (error) {
    next(error);
  }
};

const updateTaxiProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      driverName,
      contactNo,
      dutyArea,
      workExperience,
    } = req.body;
    const isTaxiExist = await TaxiModel.findById(id);
    if (!isTaxiExist) {
      return res.status(404).json({ message: "Taxi driver not found" });
    }
    if (driverName) {
      isTaxiExist.driverName = driverName;
    }
    if (contactNo) {
      isTaxiExist.contactNo = contactNo;
    }
    if (dutyArea) {
      isTaxiExist.dutyArea = dutyArea;
    }
    if (workExperience) {
      isTaxiExist.workExperience = workExperience;
    }
    await isTaxiExist.save();
    return res
      .status(200)
      .json({ message: "Taxi driver updated successfully" });
  } catch (err) {
    next(err);
  }
};
const getTaxiById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taxi = await TaxiModel.findById(id);
    if (!taxi) {
      return res.status(404).json({ message: "Taxi driver not found" });
    }
    return res.status(200).json({ data: taxi, message: "success" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  signup,
  updateTaxiProfile,
  getAllTaxies,
  getTaxiById
};
