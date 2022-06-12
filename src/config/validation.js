const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const createSchema = Joi.object({
  creator: Joi.string().required(),
  title: Joi.string().required(),
  link: Joi.string().required(),
  pubDate: Joi.string().required(),
  content: Joi.string().required(),
  contentSnippet: Joi.string().required(),
  guid: Joi.string().required(),
  categories: Joi.array().items(Joi.string()).required(),
});

const updateSchema = Joi.object({
  creator: Joi.string(),
  title: Joi.string(),
  link: Joi.string(),
  pubDate: Joi.string(),
  content: Joi.string(),
  contentSnippet: Joi.string(),
  guid: Joi.string(),
  categories: Joi.array().items(Joi.string()),
});

const idSchema = Joi.object({ id: Joi.objectId() });

module.exports = { createSchema, updateSchema, idSchema };
