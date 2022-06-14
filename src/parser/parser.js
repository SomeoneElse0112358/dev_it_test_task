const RSSParser = require("rss-parser");
const { post } = require("../models");
const { url } = require("../config/config");
const { rssSchema } = require("../validation/schemas");

const equalCategories = (checkList, currentList) => {
  if (checkList.length != currentList.length) return false;

  for (let i = 0; i < checkList.length; i++)
    if (checkList[i] !== currentList[i]) return false;

  return true;
};

const rssParser = async () => {
  const feed = await new RSSParser().parseURL(url);

  feed.items.forEach(async (item) => {
    const validation = rssSchema.validate(item);

    if (validation.error) {
      console.log(
        `The post with guid ${item.guid} has invalid data: ${validation.error.details[0].message}`
      );
    } else {
      const doc = await post.findOne({
        guid: item.guid,
      });

      if (!doc) {
        await post.create({
          ...item,
          pubDate: item.isoDate,
        });
        console.log(`The post with guid "${item.guid}" has been added!`);
      } else if (
        item.creator !== doc.creator ||
        item.title !== doc.title ||
        item.link !== doc.link ||
        item.content !== doc.content ||
        item.contentSnippet !== doc.contentSnippet ||
        !equalCategories(item.categories, doc.categories)
      ) {
        await post.updateOne(
          { guid: item.guid },
          { ...item, pubDate: item.isoDate }
        );
        console.log(`The post with guid "${item.guid}" has been updated!`);
      }
    }
  });
};

module.exports = { rssParser };
