const {
  packagePhoto,
  addPackage,
  getPackageByAgencyId,
  getAllPackages,
  getPackageById,
} = require("../package/package.controller");
const express = require("express");
const packageRoutes = express.Router();
packageRoutes.post("/add-package", packagePhoto, addPackage);
packageRoutes.get("/", getAllPackages);
packageRoutes.get("/agency/:agencyId", getPackageByAgencyId);
packageRoutes.get("/getData/:id", getPackageById);
module.exports = packageRoutes;
