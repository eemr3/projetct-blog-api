const Joi = require('joi');

const validateLogin = Joi.object({
  email: Joi.string().email().not().empty()
    .required(),
  password: Joi.string().not().empty()
.required(),
});

module.exports = validateLogin;
