const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const SectorSchema = Joi.object({
  name: Joi.string(),
  map: Joi.string().uri({ allowRelative: true, relativeOnly: true }).required(),
  lat: Joi.string().required(),
  long: Joi.string().required(),
  images: Joi.array().items(
    Joi.string().uri({ allowRelative: true, relativeOnly: true })
  ),
  vias: Joi.array().items(Joi.objectId()),
});
module.exports = SectorSchema;
