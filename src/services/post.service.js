const moment = require("moment");
const { post } = require("../models");

class PostService {
  constructor() {
    this.model = post;
  }
  async create(body) {
    return await this.model.create({
      ...body,
      pubDate: moment(body.pubDate).utc().format(),
    });
  }

  async getOne(id) {
    return await this.model.findOne({ _id: id });
  }

  async update(id, body) {
    return await this.model.updateOne({ _id: id }, body);
  }

  async delete(id) {
    return await this.model.deleteOne({ _id: id });
  }

  async getList() {
    return await this.model.find();
  }
}

module.exports = PostService;
