const mongoose = require("mongoose");

const AbilitySchema = new mongoose.Schema({
  masterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Master",
    required: true,
  },
  ability: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  damage: {
    type: Number,
  },
  status: {
    type: String,
    default: "active",
  },
});
module.exports = mongoose.model("Ability", AbilitySchema);
