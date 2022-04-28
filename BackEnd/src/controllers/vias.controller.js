const mongoose = require("mongoose");
const Joi = require("joi");
const ViaSchema = require("./schemas/via.schema");
const Via = require("../models/via.model");
const Sector = require("../models/sector.model");
/**
 ** getVias ok
 * get all Vias on database
 * @param {*} req
 * @param {*} res
 */
async function getVias(req, res) {
  try {
    const response = await Via.find({}).populate("sectorId", {
      name: 1,
      map: 1,
      lat: 1,
      long: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
}
/**
 ** getVia ok
 * get via by id
 * @param {req.params.id} req
 * @param {*} res
 */
async function getVia(req, res) {
  try {
    const _id = req.params.id;
    const response = await Via.findById(_id);
    res.status(200).json(response.vias);
  } catch (err) {
    console.error(err);
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
/**
 ** createVia ok
 * Create a new via and append to a sector.vias
 * @param {body:{name,sectorId,opener,grade,climbingType,preview,rockKind?,desc?,images?}} req
 * @param {*} res
 */
async function createVia(req, res) {
  const dataVia = req.body;
  try {
    Joi.assert(dataVia, ViaSchema);
    const sector = await Sector.findById(dataVia.sectorId);
    console.log(dataVia);
    const via = new Via(dataVia);
    console.log(via);
    const savedVia = await via.save();
    sector.vias.push(savedVia._id);
    await sector.save();
    res.status(200).json(savedVia);
  } catch (err) {
    console.error(err);
    /*  const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    }); */
    res.status(400).json(err);
  }
}
/**
 ** editVia ok
 * Edit a via and move to the right sector
 * @param { params.id, body : {name,sectorId,opener,grade,climbingType,preview,rockKind?,desc?,images? } } req
 * @param {*} res
 */
async function editVia(req, res) {
  const _id = req.params.id;
  const dataVia = req.body;
  try {
    Joi.assert(dataVia, ViaSchema);
    const via = await Via.findByIdAndUpdate(_id, dataVia, { new: false });
    //console.log(via.sectorId != dataVia.sectorId);
    //if (via.sectorId != dataVia.sectorId) await moveVia(via, dataVia.sectorId);
    res.status(204).json(via);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
/**
 ** moveVia aux for notOK test
 * Remove the via from the old sector and add to the new one
 * @param {via: Model} via
 * @param {oldSectorId} sector
 */
async function moveVia(via, sector) {
  try {
    const rmv = await Sector.findById(sector);
    const add = await Sector.findById(via.sectorId);
    console.log("add :", add);
    console.log("rmv :", rmv);
    add.vias.push(via);
    await add.save();
    const index = rmv.vias.indexOf(via._id);
    if (index != -1) rmv.vias.splice(index, 1);
    await rmv.save();
    return true;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
/**
 ** deleteVia ok
 * Delete via and remove from sector.vias
 * @param {body:{id,name?,sectorId,opener?,grade?,climbingType?,preview?,rockKind?,desc?,images?}} req
 * @param {*} res
 */
async function deleteVia(req, res) {
  const dataVia = req.body;
  try {
    console.log("dataVia.sectorId", dataVia.sectorId);
    const sector = await Sector.findById(dataVia.sectorId);
    console.log("sector", sector);
    const index = sector.vias.indexOf(dataVia.id);
    if (index != -1) sector.vias.splice(index, 1);
    const response = await Via.findByIdAndRemove(dataVia.id);
    res.status(204).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
module.exports = {
  getVias,
  getVia,
  createVia,
  editVia,
  deleteVia,
};
