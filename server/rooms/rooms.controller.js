const RoomModel = require("./rooms.model");

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
const roomImgUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
}).single("roomImg");

const createRoom = async (req, res, next) => {
  try {
    const roomImg = req.file;
    const {
      hotelId,
      totalRooms,
      acRooms,
      nonAcRooms,
      checkInTime,
      checkOutTime,
      acRoomPrice,
      nonAcRoomPrice,
    } = req.body;
    const isRoomsAlreadyCreated = await RoomModel.findOne({ hotelId });
    if (isRoomsAlreadyCreated) {
      return res
        .status(400)
        .json({ message: "Rooms already exists for this hotel" });
    }
    const room = await RoomModel({
      hotelId,
      totalRooms,
      acRooms,
      nonAcRooms,
      roomImg,
      checkInTime,
      checkOutTime,
      acRoomPrice,
      nonAcRoomPrice,
      roomImg: roomImg.filename,
    });
    await room.save();
    res.status(201).json({ message: "Room created successfully", data: room });
  } catch (error) {
    next(error);
  }
};

const geAllRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find().populate("hotelId");
    res
      .status(200)
      .json({ message: "Rooms fetched successfully", data: rooms });
  } catch (error) {
    next(error);
  }
};

const getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await RoomModel.findById(id).populate("hotelId").exec();
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room fetched successfully", data: room });
  } catch (error) {
    next(error);
  }
};

const getRoomsByHotelId = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const room = await RoomModel.findOne({ hotelId });
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Rooms fetched successfully", data: room });
  } catch (error) {
    next(error);
  }
};

const getBookedRoomsByTouristId = async (req, res, next) => {
  try {
    const { touristId } = req.params;
    const rooms = await RoomModel.find({ touristId });
    res
      .status(200)
      .json({ message: "Rooms fetched successfully", data: rooms });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRoom,
  geAllRooms,
  getRoomById,
  getRoomsByHotelId,
  roomImgUpload,
  getBookedRoomsByTouristId,
};
