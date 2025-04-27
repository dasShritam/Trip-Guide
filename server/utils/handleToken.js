const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constant");
const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10h" });
};

module.exports = { generateAccessToken };
