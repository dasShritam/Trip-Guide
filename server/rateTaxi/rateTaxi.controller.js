const mongoose = require("mongoose");
const { RateTaxiModel } = require("./rateTaxi.model");
const { TaxiModel } = require("../taxi/taxi.model");

const addRating = async (req, res) => {
  try {
    const { touristId, taxiId, rating, review } = req.body;
    if (!touristId || !taxiId || !rating || !review) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const taxi = await TaxiModel.findById(taxiId);

    if (!taxi) {
      return res.status(400).json({
        success: false,
        message: "Taxi not found.",
      });
    }
    const rateTaxi = new RateTaxiModel({
      touristId,
      taxiId,
      rating,
      review,
    });

    await rateTaxi.save();

    const prevRatings = await RateTaxiModel.find({ taxiId });
    let newRating = 0;

    if (prevRatings.length > 0) {
      const totalRates = prevRatings.reduce((acc, curr) => {
        return acc + curr.rating;
      }, 0);
      newRating = totalRates / prevRatings.length;
    }

    await TaxiModel.findByIdAndUpdate(taxiId, { rating: newRating });

    return res.status(200).json({
      message: "Rating added successfully",
      success: true,
      currentRating: newRating,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllRating = async (req, res) => {
  try {
    const rating = await RateTaxiModel.find()
      .populate("touristId")
      .populate("taxiId")
      .exec();
    return res.status(200).json({
      message: "Rating fetched successfully",
      success: true,
      data: rating,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllRatingByTaxiId = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await RateTaxiModel.find({ taxiId: id })
      .populate("touristId")
      .populate("taxiId")
      .exec();
    return res.status(200).json({
      message: "Rating fetched successfully",
      success: true,
      data: rating,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addRating, getAllRating, getAllRatingByTaxiId };
