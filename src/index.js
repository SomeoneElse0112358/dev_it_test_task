const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cron = require("node-cron");
const { ValidationError } = require("express-validation");
const routes = require("./routes");
const { database, port } = require("./config/config");
const { rssParser } = require("./parser/parser");
const app = express();

mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database has been connected...`));

app.use(logger("common"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

cron.schedule("*/10 * * * * *", rssParser);

app.use("/api", routes);

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

app.listen(port, () => {
  console.log("Server has been started...");
});
