const express = require("express");
const {
  getVias,
  getVia,
  createVia,
  editVia,
  deleteVia,
} = require("../controllers/vias.controller");
const router = express.Router();

router.get("/:sec", getVias);
router.get("/:id", getVia);
router.post("/:sec", createVia);
router.patch("/:id", editVia);
router.delete("/:id", deleteVia);

module.exports = router;
