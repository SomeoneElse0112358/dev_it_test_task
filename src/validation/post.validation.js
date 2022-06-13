const { createSchema, updateSchema, idSchema } = require("./schemas");

class PostValidation {
  create(req, res, next) {
    const validation = createSchema.validate(req.body);
    if (validation.error)
      return res.status(400).send(validation.error.details[0].message);
    next();
  }

  update(req, res, next) {
    const validation = updateSchema.validate(req.body);
    if (validation.error)
      return res.status(400).send(validation.error.details[0].message);
    next();
  }

  id(req, res, next) {
    const validation = idSchema.validate(req.params);
    if (validation.error)
      return res.status(400).send(validation.error.details[0].message);
    next();
  }
}

module.exports = PostValidation;
