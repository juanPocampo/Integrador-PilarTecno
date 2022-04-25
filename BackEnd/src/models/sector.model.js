const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ViaSchema = new Schema({
  name: { type: String, required: true },
  opener: { type: String, required: true },
  grade: { type: String, required: true },
  climbingType: { type: String, required: true },
  rockKind: { type: String },
  desc: { type: String },
  images: { type: [String] },
});

const SectorSchema = new Schema({
  name: { type: String, required: true },
  map: { type: String, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
  images: { type: [String] },
  vias: { type: [ViaSchema] },
});

const Sector = mongoose.model("sector", SectorSchema);
const Via = mongoose.model("via", ViaSchema);

module.exports = { Sector, Via };
