const { FoodBookingModel } = require("./foodBooking.model");

const orderFood = async (req, res, next) => {
  try {
    const {
      foodId,
      touristId,
      dateAndTime,
      noOfPersons,
      accountHolderName,
      cardNumber,
      cvv,
      expiryDate,
    } = req.body;
    if (
      !foodId ||
      !noOfPersons ||
      !touristId ||
      !dateAndTime ||
      !accountHolderName ||
      !cardNumber ||
      !cvv ||
      !expiryDate
    ) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }
    const orderId = `${new Date().getTime()}`;

    const newOrder = new FoodBookingModel({
      orderId,
      foodId,
      touristId,
      noOfPersons,
      dateAndTime,
      accountHolderName,
      cardNumber,
      cvv,
      expiryDate,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await FoodBookingModel.find();
    res.status(200).json({ message: "All orders fetched", data: orders });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    console.log('orr', orderId)

    const order = await FoodBookingModel.findById(orderId);
    res.status(200).json({ message: "Order fetched", data: order });
  } catch (error) {
    next(error);
  }
};

const getOrdersByFoodId = async (req, res, next) => {
  try {
    const { foodId } = req.params;
    const orders = await FoodBookingModel.find({ foodId }).populate("touristId").exec();
    res.status(200).json({ message: "Orders fetched", data: orders });
  } catch (error) {
    next(error);
  }
};

const getOrdersByTouristId = async (req, res, next) => {
  try {
    const { touristId } = req.params;
    const orders = await FoodBookingModel.find({ touristId })
      .populate("foodId")
      .exec();
    res.status(200).json({ message: "Orders fetched", data: orders });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  orderFood,
  getAllOrders,
  getOrderById,
  getOrdersByFoodId,
  getOrdersByTouristId,
};
