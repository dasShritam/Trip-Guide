const multer = require("multer");
const { PackageModel } = require("./package.model");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG and PNG files are allowed."));
  }
};
const packagePhoto = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
}).single("packagePhoto");

const addPackage = async (req, res, next) => {
  try {
    const packagePhoto = req.file;
    const {
      packageName,
      packageDescription,
      packageType,
      destination,
      costPerHead,
      startingDate,
      days,
      nights,
      totalAvailableSeats,
      agencyId,
    } = req.body;

    if (
      !packageName ||
      !packageDescription ||
      !packageType ||
      !destination ||
      !costPerHead ||
      !startingDate ||
      !totalAvailableSeats ||
      !agencyId
    ) {
      return res.status(400).json({
        message: "All fields are required",
        data: req.body,
      });
    }

    const newPackage = new PackageModel({
      packageName,
      packageDescription,
      packageType,
      destination,
      costPerHead: Number(costPerHead),
      startingDate,
      days,
      nights,
      totalAvailableSeats: Number(totalAvailableSeats),
      packagePhoto: packagePhoto.filename,
      agencyId,
    });
    await newPackage.save();
    return res.status(201).json({
      message: "Package added successfully",
      data: newPackage,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPackages = async (req, res, next) => {
  try {
    const packages = await PackageModel.find().populate("agencyId").exec();
    return res.status(200).json({
      message: "Packages fetched successfully",
      data: packages,
    });
  } catch (err) {
    next(err);
  }
};
const getPackageByAgencyId = async (req, res, next) => {
  try {
    const { agencyId } = req.params;
    const packages = await PackageModel.find({ agencyId })
      .populate("agencyId")
      .exec();
    return res.status(200).json({
      message: "Packages fetched successfully",
      data: packages,
    });
  } catch (error) {
    next(error);
  }
};

const getPackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const package = await PackageModel.findById(id);
    return res.status(200).json({
      message: "Package fetched successfully",
      data: package,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addPackage,
  packagePhoto,
  getPackageByAgencyId,
  getAllPackages,
  getPackageById,
};