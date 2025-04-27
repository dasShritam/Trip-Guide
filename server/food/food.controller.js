const { FoodItemModel } = require("./food.model");
const multer = require("multer");

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
const foodImgUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
}).single("foodImg");

const addFood = async (req, res, next) => {
  try {
    const foodImg = req.file;

    const {
      hotelId,
      name,
      description,
      price,
      ingredients,
      foodType,
    } = req.body;

    const foodItem = await FoodItemModel({
      hotelId,
      name,
      description,
      price,
      foodType,
      ingredients,
      foodImg: foodImg.filename,
    });

    await foodItem.save();
    res
      .status(201)
      .json({ message: "Food created successfully", data: foodItem });
  } catch (error) {
    next(error);
  }
};

const getAllFoodByHotelId = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const foodItems = await FoodItemModel.find({ hotelId });
    res.status(200).json({ message: "Food item fetched", data: foodItems });
  } catch (error) {
    next(error);
  }
};

const getAllFoodItems = async (req, res, next) => {
  try {
    const foodItems = await FoodItemModel.find();
    res.status(200).json({ message: "Food item fetched", data: foodItems });
  } catch (error) {
    next(error);
  }
};

const getFoodItemById = async (req, res, next) => {
  try {
    const { foodId } = req.params;
    const foodItem = await FoodItemModel.findById(foodId).populate("hotelId");
    res.status(200).json({ message: "Food item fetched", data: foodItem });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addFood,
  foodImgUpload,
  getAllFoodByHotelId,
  getAllFoodItems,
  getFoodItemById,
};
