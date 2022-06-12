const RSSParser = require("rss-parser");
const moment = require("moment");
const { post } = require("../models");
const { url } = require("../config/config");

const rssParser = async () => {
  const feed = await new RSSParser().parseURL(url);

  feed.items.forEach(async (item) => {
    const doc = await post.findOne({
      creator: item.creator,
      title: item.title,
    });
    if (!doc) {
      await post.create({
        ...item,
        pubDate: moment(item.pubDate).utc().format(),
      });
      console.log(`The post with title "${item.title}" has been added!`);
    }
  });
};

module.exports = { rssParser };
