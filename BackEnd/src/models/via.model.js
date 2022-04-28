const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ViaSchema = new Schema({
  name: { type: String, required: true },
  sectorId: { type: mongoose.Types.ObjectId, ref: "sector", required: true },
  preview: { type: String, required: true },
  opener: { type: String, required: true },
  grade: { type: String, required: true },
  climbingType: { type: String, required: true },
  rockKind: { type: String },
  desc: { type: String },
  images: { type: [String] },
});
const Via = mongoose.model("via", ViaSchema);
module.exports = Via;
