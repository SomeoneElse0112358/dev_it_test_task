const autobind = require("auto-bind");
const { post: PostService } = require("../services");
const {
  createSchema,
  updateSchema,
  idSchema,
} = require("../config/validation");
const postService = new PostService();

class PostController {
  constructor() {
    this.serviсe = postService;
    autobind(this);
  }

  async create(req, res) {
    const bodyValidation = createSchema.validate(req.body);
    if (bodyValidation.error)
      return res.status(400).send(bodyValidation.error.details[0].message);

    const result = await this.serviсe.create(req.body);
    !result
      ? res.status(400).send("The input contains invalid data!")
      : res.status(201).send(result);
  }

  async getOne(req, res) {
    const validation = idSchema.validate(req.params);
    if (validation.error)
      return res.status(400).send(validation.error.details[0].message);

    const result = await this.serviсe.getOne(req.params.id);
    !result
      ? res.status(404).send("Sorry, we cannot find that!")
      : res.send(result);
  }

  async update(req, res) {
    const idValidation = idSchema.validate(req.params);
    if (idValidation.error)
      return res.status(400).send(idValidation.error.details[0].message);
    const bodyValidation = updateSchema.validate(req.body);
    if (bodyValidation.error)
      return res.status(400).send(bodyValidation.error.details[0].message);

    const result = await this.serviсe.update(req.params.id, req.body);
    !result.matchedCount
      ? res.status(404).send("The post is not found!")
      : res.status(200).send("The post has been successfuly updated!");
  }

  async delete(req, res) {
    const idValidation = idSchema.validate(req.params);
    if (idValidation.error)
      return res.status(400).send(idValidation.error.details[0].message);

    const result = await this.serviсe.delete(req.params.id);
    !result.deletedCount
      ? res.status(404).send("The post is not found!")
      : res.status(200).send("The post has been deleted!");
  }

  async getList(req, res) {
    const result = await this.serviсe.getList();
    !result
      ? res.status(404).send("Posts are not found!")
      : res.status(200).send(result);
  }
}

module.exports = PostController;
