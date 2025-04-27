// create a middleware for adding 2 tourist place photos
const multer = require("multer");
const { TopDestinationModel } = require("./topDestinations.model");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allwedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allwedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG and PNG files are allowed."));
  }
};
const destinationImages = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
}).fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 },
]);

const addTouristPlace = async (req, res, next) => {
  try {
    const { img1, img2 } = req.files;
    const { title, description } = req.body;
    const newTouristPlace = new TopDestinationModel({
      title,
      description,
      img1: img1[0].filename,
      img2: img2[0].filename,
    });
    const savedTouristPlace = await newTouristPlace.save();
    return res.status(201).json({
      message: "Tourist Place added successfully",
      data: savedTouristPlace,
    });
  } catch (error) {
    next(error);
  }
};

const getAllDestination = async (req, res, next) => {
  try {
    const allDestination = await TopDestinationModel.find();
    return res.status(200).json({
      message: "All Destination",
      data: allDestination,
    });
  } catch (error) {
    next(error);
  }
};

const deleteDestination = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedDestination = await TopDestinationModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Destination deleted successfully",
      data: deletedDestination,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addTouristPlace,
  destinationImages,
  getAllDestination,
  deleteDestination,
};
