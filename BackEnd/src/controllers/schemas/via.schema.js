const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const ViaSchema = Joi.object({
  name: Joi.string().required(),
  sectorId: Joi.objectId().required(),
  opener: Joi.string().required(),
  grade: Joi.string().required(),
  climbingType: Joi.string().required(),
  preview: Joi.string()
    .uri({ allowRelative: true, relativeOnly: true })
    .required(),
  rockKind: Joi.string(),
  desc: Joi.string(),
  images: Joi.array().items(
    Joi.string().uri({ allowRelative: true, relativeOnly: true })
  ),
});
module.exports = ViaSchema;
