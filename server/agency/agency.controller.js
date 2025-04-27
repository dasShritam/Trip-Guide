const { hashPassword } = require("../utils/hanldePasswordEnc");
const { AgencyModel } = require("./agency.model");

const agencySignup = async (req, res, next) => {
  try {
    const { agencyName, agencyAddress, password, email, phoneNumber } =
      req.body;
    const hashedPassword = await hashPassword(password);
    const agency = new AgencyModel({
      agencyAddress,
      agencyName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await agency.save();
    return res.status(201).json({
      message: "Agency registration completed successfully",
      data: agency,
    });
  } catch (error) {
    next(error);
  }
};
const getAllAgencies = async (req, res, next) => {
  try {
    const agencies = await AgencyModel.find();
    return res.status(200).json({
      message: "All agencies fetched successfully",
      data: agencies,
    });
  } catch (error) {
    next(error);
  }
};

const getAgencyById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const agency = await AgencyModel.findById(id);
    if (!agency) {
      return res.status(404).json({ message: "Agency not found" });
    }

    return res.status(200).json({ data: agency, message: "Agency found" });
  } catch (error) {
    next(error);
  }
};

const updateAgencyById = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {agencyName, agencyAddress, phoneNumber} = req.body;
    const agency = await AgencyModel.findById(id);
    if (!agency) {
      return res.status(404).json({message: "Agency not found."})
    }
    if (agencyName) {
      agency.agencyName = agencyName
    }
    if (agencyAddress) {
      agency.agencyAddress = agencyAddress
    }
    if (phoneNumber) {
      agency.phoneNumber = phoneNumber
    }
    await agency.save()
    return res.status(200).json({message: "agency updated", data: agency})

  } catch (error) {
    next(error)
  }
}

module.exports = {
  agencySignup,
  getAllAgencies,
  getAgencyById,
  updateAgencyById
};
