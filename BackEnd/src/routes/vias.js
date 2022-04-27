const express = require("express");
const {
  getVias,
  getVia,
  createVia,
  editVia,
  deleteVia,
} = require("../controllers/vias.controller");
const router = express.Router();

router.get("/", getVias);
router.get("/:id", getVia);
router.post("/", createVia);
router.patch("/:id", editVia);
router.delete("/:id", deleteVia);

module.exports = router;