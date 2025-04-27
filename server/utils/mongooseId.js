const mongoose = require("mongoose");
const isValildMongooseId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = { isValildMongooseId };
