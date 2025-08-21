const mongoose = require("mongoose");

const MasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
    default: "active",
  },
});
module.exports = mongoose.model("Master", MasterSchema);
