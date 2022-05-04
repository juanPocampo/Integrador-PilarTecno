const axios = require("axios").default;
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");
const SectorSchema = require("./schemas/sector.schema");
const Sector = require("../models/sector.model");
/**
 * * getSectores
 * get all sectores from database
 * @param {} req
 * @param {} res
 * @returns [{sectores}]
 */
async function getSectores(req, res) {
  try {
    const response = await Sector.find({}).populate(
      "vias" /* , {
      name: 1,
      preview: 1,
      grade: 1,
    } */
    );
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    /* Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    }); */
    res.status(400).json(error);
  }
}
/**
 **getSector
 * get sectores by id
 * @param {params.id} req
 * @param {*} res
 */
async function getSector(req, res) {
  try {
    const _id = req.params;
    const response = await Sector.findById(_id).populate("vias");
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
/**
 ** CreateSector
 * Create a new sector
 * @param {body: {name,map,lat,long,images?,vias?}} req
 * @param {*} res
 */
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
//TODO editSector and deleteSector
/**
 * * editSector
 *  update one sector by id
 * @param {body: {name,map,lat,long,images?,vias?}} req
 * @param {*} res
 */
async function editSector(req, res) {
  const { id } = req.params;
  const data = req.body;
  console.log(id, data);
  try {
    Joi.assert(data, SectorSchema);
    const response = await Sector.findByIdAndUpdate(id, data, { new: true });
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
/**
 * *deleteSector
 * @param {*} req
 * @param {*} res
 */
async function deleteSector(req, res) {
  const _id = req.params;
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
