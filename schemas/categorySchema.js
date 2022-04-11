const Joi = require('joi');

const validateCategory = Joi.object({
  name: Joi.string().not().empty().required(),
});

module.exports = validateCategory;