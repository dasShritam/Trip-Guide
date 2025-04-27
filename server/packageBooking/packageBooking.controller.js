const { PackageBooking } = require("./packageBooking.model");

const addPackageBooking = async (req, res, next) => {
  try {
    const {
      packageId,
      touristId,
      agencyId,
      accountHolderName,
      accountNumber,
      expiryDate,
      cvv,
    } = req.body;
    if (!packageId || !touristId || !agencyId) {
      return res.status(400).json({
        message: "Package id, tourist id and agency id are required.",
      });
    }
    const packageBooking = new PackageBooking({
      packageId,
      touristId,
      agencyId,
      accountHolderName,
      accountNumber,
      expiryDate,
      cvv,
    });
    await packageBooking.save();
    return res.status(201).json({
      message: "Package booking added successfully",
      data: packageBooking,
    });
  } catch (error) {
    next(error);
  }
};
const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await PackageBooking.find()
      .populate("packageId")
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
const getBookingsByTouristId = async (req, res, next) => {
  try {
    const { touristId } = req.params;
    const bookings = await PackageBooking.find({ touristId })
      .populate("packageId")
      .exec();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

const getBookingsByPackageId = async (req, res, next) => {
  try {
    const { packageId } = req.params;
    const bookings = await PackageBooking.find({ packageId })
      .populate("packageId")
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

const getBookingsByAgencyId = async (req, res, next) => {
  try {
    const { agencyId } = req.params;
    const bookings = await PackageBooking.find({ agencyId })
      .populate("agencyId")
      .populate("touristId")
      .populate("packageId")
      .exec();

    return res.status(200).json({
      message: "fetch the bookings that match the agency id",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBookings,
  addPackageBooking,
  getBookingsByTouristId,
  getBookingsByAgencyId,
  getBookingsByPackageId,
};
