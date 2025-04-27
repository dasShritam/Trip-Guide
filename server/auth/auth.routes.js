const express = require("express");
const authRoutes = express.Router();
const { login, forgotPassword } = require("./auth.controller");
authRoutes.post("/login", login);
authRoutes.patch("/forgot-password", forgotPassword);

module.exports = {
    authRoutes
}