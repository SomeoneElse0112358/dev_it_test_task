const { version } = require("../../package.json");
const { host, port } = require("../config/config");

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "Test Task DevIT docs",
    version,
  },
  servers: [
    {
      url: `http://${host}:${port}/api`,
      description: "For local",
    },
    {
      url: `http://${host}:3001/api`,
      description: "For docker",
    },
  ],
};

module.exports = swaggerDef;
