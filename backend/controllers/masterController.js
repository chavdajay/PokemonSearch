const Master = require("../models/Master");

exports.createMaster = async (req, res) => {
  try {
    const master = new Master(req.body);
    await master.save();
    res.json(master);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMasters = async (req, res) => {
  try {
    const masters = await Master.find();
    res.json(masters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMasterByName = async (req, res) => {
  try {
    const master = await Master.findOne({ name: req.params.name });
    if (!master) return res.status(404).json({ message: "Pokemon not found" });
    res.json(master);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteMaster = async (req, res) => {
  try {
    await Master.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
