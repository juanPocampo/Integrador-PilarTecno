const express = require("express");
const {
  getSectores,
  getSector,
  createSector,
  editSector,
  deleteSector,
} = require("../controllers/sectores.controller");
const router = express.Router();

router.get("/", getSectores);
router.get("/:id", getSector);
router.post("/", createSector);
router.patch("/:id", editSector);
router.delete("/:id", deleteSector);

module.exports = router;
