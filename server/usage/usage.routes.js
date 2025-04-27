const {collectionsLength} = require("./usage.controller")

const express = require("express");
const usageRoutes = express.Router();

usageRoutes.get("/collections-length", collectionsLength);

module.exports = usageRoutes;