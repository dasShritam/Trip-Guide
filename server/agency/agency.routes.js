const { isEmailUnique } = require("../middleware/emailUnique");
const {
  agencySignup,
  getAllAgencies,
  getAgencyById,
  updateAgencyById,
} = require("./agency.controller");
const express = require("express");
const agencyRoutes = express.Router();

agencyRoutes.post("/signup", isEmailUnique, agencySignup);
agencyRoutes.get("/getAllAgencies", getAllAgencies);
agencyRoutes.get("/getAgencyById/:id", getAgencyById);
agencyRoutes.get("/updateAgency/:id", updateAgencyById);

module.exports = agencyRoutes;
