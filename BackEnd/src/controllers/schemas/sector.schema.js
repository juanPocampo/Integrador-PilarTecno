const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const SectorSchema = Joi.object({
  name: Joi.string().required(),
  map: Joi.string().uri().required(),
  lat: Joi.string().required(),
  long: Joi.string().required(),
  images: Joi.array().items(
    Joi.string().uri()
  ),
  vias: Joi.array().items(Joi.objectId()),
});
module.exports = SectorSchema;
