const { isValildMongooseId } = require("../utils/mongooseId");
const { TaxiBookingModel } = require("./taxiBooking.model");
console.log(isValildMongooseId);

const calculateTaxiFare = async (req, res, next) => {
  try {
    const { travelDistance } = req.body;
    if (!travelDistance) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    const baseFare = 50;
    const chargePerKM = 10;
    const totalKMCharge = travelDistance * chargePerKM;
    const totalCharge = baseFare + totalKMCharge;
    return res.status(200).json({
      message: "Taxi fare calculated successfully",
      data: totalCharge,
    });
  } catch (error) {
    next(error);
  }
};

const taxiRequets = async (req, res, next) => {
  try {
    const {
      touristId,
      pickUpLocation,
      destination,
      travelDistance,
      pickUpDateTime,
      totalFare,
    } = req.body;
    if (
      !touristId ||
      !pickUpLocation ||
      !destination ||
      !travelDistance ||
      !pickUpDateTime ||
      !totalFare
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    const taxiBooking = new TaxiBookingModel({
      touristId,
      pickUpLocation,
      destination,
      travelDistance,
      pickUpDateTime,
      totalFare,
    });
    await taxiBooking.save();
    return res.status(201).json({
      message: "Taxi booking request sent successfully",
      data: taxiBooking,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTaxiBookingByTouristId = async (req, res, next) => {
  try {
    const { id } = req.params;
    //todo => check this function
    // if (!isValildMongooseId(id)) {
    //   return res.status(401).json({ message: "id is not valid" });
    // }
    const taxiBookings = await TaxiBookingModel.find({ touristId: id });
    return res.status(200).json({
      data: taxiBookings || [],
      message: "All taxi bookings by tourist id",
    });
  } catch (error) {
    next(error);
  }
};

const getAllTaxiBookings = async (req, res, next) => {
  try {
    const bookings = await TaxiBookingModel.find({})
      .populate("touristId")
      .exec();
    return res
      .status(200)
      .json({ message: "Taxi bookings fetched. ", data: bookings });
  } catch (error) {
    next(error);
  }
};
const getAllPendingTaxiBookings = async (req, res, next) => {
  try {
    const bookings = await TaxiBookingModel.find({
      taxiDriverStatus: "pending",
    })
      .populate("touristId")
      .exec();
    return res
      .status(200)
      .json({ message: "Taxi bookings fetched. ", data: bookings });
  } catch (error) {
    next(error);
  }
};
const getAllAcceptedBookingsByDriver = async (req, res, next) => {
  try {
    const { taxiId } = req.params;
    const bookings = await TaxiBookingModel.find({
      taxiDriverStatus: "accepted",
      taxiId,
    })
      .populate("touristId")
      .exec();
    return res
      .status(200)
      .json({ message: "Taxi bookings fetched. ", data: bookings });
  } catch (error) {
    next(error);
  }
};

const acceptReqById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { taxiId } = req.body;
    const taxiRequest = await TaxiBookingModel.findById(id);

    if (!taxiRequest) {
      return res.status(404).json({ message: "request not found" });
    }
    taxiRequest.taxiDriverStatus = "accepted";
    taxiRequest.taxiId = taxiId;
    await taxiRequest.save();
    return res.status(200).json({
      message: "Taxi request approved successfully",
      data: taxiRequest,
    });
  } catch (error) {
    next(error);
  }
};
const paymentAcceptReqById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taxiRequest = await TaxiBookingModel.findById(id);

    if (!taxiRequest) {
      return res.status(404).json({ message: "request not found" });
    }
    taxiRequest.paymentStatus = "paid";
    await taxiRequest.save();
    return res.status(200).json({
      message: "Taxi payment sent successfully",
      data: taxiRequest,
    });
  } catch (error) {
    next(error);
  }
};

const getAllDriverApprovedReqByTaxiId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taxiRequests = await TaxiBookingModel.find({
      taxiId: id,
      taxiDriverStatus: "accepted",
    })
      .populate("taxiId")
      .populate("touristId")
      .exec();

    return res.status(200).json({
      message: "Taxi request approved successfully",
      data: taxiRequests,
    });
  } catch (error) {
    next(error);
  }
};

const getBookingById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taxiRequest = await TaxiBookingModel.findById(id)
      .populate("taxiId")
      .populate("touristId")
      .exec();
    if (!taxiRequest) {
      return res.status(404).json({ message: "request not found" });
    }
    return res.status(200).json({
      message: "Taxi request approved successfully",
      data: taxiRequest,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  calculateTaxiFare,
  taxiRequets,
  getAllTaxiBookingByTouristId,
  getAllTaxiBookings,
  getAllPendingTaxiBookings,
  acceptReqById,
  getAllDriverApprovedReqByTaxiId,
  paymentAcceptReqById,
  getBookingById,
};
