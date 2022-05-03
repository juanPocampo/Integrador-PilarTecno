const Joi = require("joi");

const ImageSchema = Joi.object({
  name: Joi.string().required(),
  url: Joi.string().uri().required(),
});

module.exports = ImageSchema