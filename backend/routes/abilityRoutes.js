const express = require("express");
const router = express.Router();
const abilityController = require("../controllers/abilityController");

router.post("/", abilityController.createAbility);
router.get("/", abilityController.getAbilities);
router.get("/master/:masterId", abilityController.getAbilitiesByMaster);
router.put("/:id", abilityController.updateAbility);
router.delete("/:id", abilityController.deleteAbility);

module.exports = router;
