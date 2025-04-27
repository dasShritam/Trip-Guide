const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
      required: [true, "Hotel ID is required"],
    },
    name: {
      type: String,
      required: [true, "Food name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    foodType: {
      type: String,
      enum: ["veg", "non-veg"],
      required: true,
    },
    foodImg: {
      type: String,
      required: [true, "Food image is required"],
    },
    ingredients: {
      type: String,
      required: [true, "Ingredients are required"],
    },
    availability: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const FoodItemModel = mongoose.model("FoodItem", foodItemSchema);

module.exports = { FoodItemModel };
