const mongoose = require("mongoose");
const Joi = require("joi");
const ImageSchema = require("./schemas/image.schema");
const Image = require("../models/images.model");

async function getAllImages(req, res) {
  try {
    const response = await Image.find({});
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    /* Object.assign(error, {
          code: "BAD REQUEST",
          message: err.details[0].message,
          severity: "LOW",
        }); */
    res.status(400).json(err);
  }
}
async function getImagesSectores(req, res) {
  try {
    const regExp = new RegExp("sectores", 'i');
    const response = await Image.find({ url: regExp });

    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    /* Object.assign(error, {
          code: "BAD REQUEST",
          message: err.details[0].message,
          severity: "LOW",
        }); */
    res.status(400).json(err);
  }
}
async function getImagesVias(req, res) {
  try {
    const regExp = new RegExp("vias", 'i');
    const response = await Image.find({ url: regExp });
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    /* Object.assign(error, {
          code: "BAD REQUEST",
          message: err.details[0].message,
          severity: "LOW",
        }); */
    res.status(400).json(err);
  }
}
async function createImage(req, res) {
  const data = req.body;
  try {
    Joi.assert(data, ImageSchema);
    const img = new Image(data);
    const response = await img.save();
    res.status(200).json(response);
  } catch (err) {
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}

module.exports = {
  getAllImages,
  createImage,
  getImagesSectores,
  getImagesVias,
};
