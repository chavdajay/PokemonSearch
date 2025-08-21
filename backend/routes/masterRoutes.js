const express = require("express");
const router = express.Router();
const masterController = require("../controllers/masterController");

router.post("/", masterController.createMaster);
router.get("/", masterController.getMasters);
router.get("/:name", masterController.getMasterByName);
router.delete("/:id", masterController.deleteMaster);

module.exports = router;
