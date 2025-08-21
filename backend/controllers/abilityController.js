const Ability = require("../models/Ability");

exports.createAbility = async (req, res) => {
  try {
    const ability = new Ability(req.body);
    await ability.save();
    res.json(ability);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAbilities = async (req, res) => {
  try {
    const abilities = await Ability.find().populate("masterId");
    res.json(abilities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAbilitiesByMaster = async (req, res) => {
  try {
    const abilities = await Ability.find({ masterId: req.params.masterId });
    if (!abilities || abilities.length === 0)
      return res
        .status(404)
        .json({ message: "No abilities found for this Pokemon" });
    res.json(abilities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAbility = async (req, res) => {
  try {
    const ability = await Ability.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!ability) return res.status(404).json({ message: "Ability not found" });
    res.json(ability);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAbility = async (req, res) => {
  try {
    await Ability.findByIdAndDelete(req.params.id);
    res.json({ message: "Ability deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
