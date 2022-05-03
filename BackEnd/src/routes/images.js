const express = require("express");
const {
  getAllImages,
  createImage,
  getImagesSectores,
  getImagesVias,
} = require("../controllers/images.controller");

const router = express.Router();

router.get("/sectores", getImagesSectores);
router.get("/vias", getImagesVias);
router.get("/", getAllImages);
router.post("/", createImage);

module.exports = router;
