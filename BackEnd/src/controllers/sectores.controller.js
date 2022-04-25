const axios = require("axios").default;
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");
const SectorSchema = require("./schemas/sector.schema");
const { Sector } = require("../models/sector.model");

async function getSectores(req, res) {
  try {
    const response = await Sector.find({});
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
async function getSector(req, res) {
  try {
    const _id = mongoose.Types.ObjectId(req.params);
    const response = await Sector.findById(_id);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
async function createSector(req, res) {
  const data = req.body;
  try {
    Joi.assert(data, SectorSchema);
    const sector = new Sector(data);
    const response = await sector.save();
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
async function editSector(req, res) {
  const _id = mongoose.Types.ObjectId(req.params);
  const data = req.body;
  try {
    Joi.assert(data, SectorSchema);
    const response = await Sector.updateOne({ _id }, data);
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
async function deleteSector(req, res) {
  const _id = mongoose.Types.ObjectId(req.params);
  try {
    const response = await Sector.deleteOne(_id);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
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
  getSectores,
  getSector,
  createSector,
  editSector,
  deleteSector,
};
