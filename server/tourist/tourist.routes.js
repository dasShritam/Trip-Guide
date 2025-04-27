const {
  touristSignup,
  touristSignupUploads,
  getTouristById,
  getAllTourist,
  updateTourist,
  deActivateTourist,
  activateTourist
} = require("./tourist.controller");
const express = require("express");
const { isEmailUnique } = require("../middleware/emailUnique");
const touristRoutes = express.Router();
touristRoutes.post(
  "/signup",
  touristSignupUploads,
  isEmailUnique,
  touristSignup
); 

touristRoutes.get('/getTourist/:id', getTouristById);
touristRoutes.get('/getAllTourist', getAllTourist);
touristRoutes.patch('/updateTourist/:id', updateTourist);
touristRoutes.patch('/deActivateTourist/:id', deActivateTourist);
touristRoutes.patch('/activateTourist/:id', activateTourist);

module.exports = { touristRoutes };
