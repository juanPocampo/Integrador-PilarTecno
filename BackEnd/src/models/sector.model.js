const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SectorSchema = new Schema({
  name: { type: String, required: true },
  map: { type: String, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
  images: { type: [String] },
  vias: [{ type: mongoose.Types.ObjectId, ref: "vias" }],
});

const Sector = mongoose.model("sector", SectorSchema);

module.exports = { Sector };
