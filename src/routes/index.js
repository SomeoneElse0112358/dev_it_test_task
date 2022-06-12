const express = require("express");
const router = express();
const postRouter = require("./post.router");
const docsRoute = require("./docs.route");

router.use("/posts", postRouter);

router.use("/docs", docsRoute);

module.exports = router;
