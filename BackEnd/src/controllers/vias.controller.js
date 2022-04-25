const axios = require("axios").default;
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");
const ViaSchema = require("./schemas/via.schema");
const { Sector, Via } = require("../models/sector.model");

async function getVias(req, res) {
  try {
    const _id = mongoose.Types.ObjectId(req.params.sec);
    const response = await Sector.findById(_id);
    res.status(200).json(response.vias);
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
async function getVia(req, res) {
  const id = req.params;
  res.json({ msg: "getVia ok", id });
}
async function createVia(req, res) {
  const _id = mongoose.Types.ObjectId(req.params.sec);
  const data = req.body;
  try {
    Joi.assert(data, ViaSchema);
    const nVia = new Via(data);
    const response = await Sector.updateOne(
      { _id },
      {
        $push: { vias: nVia },
      }
    );
    console.log(response);
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
async function editVia(req, res) {
  const id = req.params;
  res.json({ msg: "editVia ok", id });
}
async function deleteVia(req, res) {
  const id = req.params;
  res.json({ msg: "deleteVia ok", id });
}
module.exports = {
  getVias,
  getVia,
  createVia,
  editVia,
  deleteVia,
};
