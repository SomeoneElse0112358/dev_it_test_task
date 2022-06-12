const dotenv = require("dotenv");
const path = require("path");
const { cleanEnv, str } = require("envalid");

dotenv.config({ path: path.resolve(".env") });

const env = cleanEnv(process.env, {
  HOST: str({ default: "localhost" }),
  PORT: str(),
  DB_HOST: str({ default: "test_task-mongo" }),
  DB_PORT: str({ default: "27017" }),
  DB_NAME: str({ default: "testdb" }),
  URL: str(),
});

module.exports = {
  host: env.HOST,
  port: env.PORT,
  database: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    name: env.DB_NAME,
    url: `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`,
  },
  url: env.URL,
};
