const express = require("express");

const { hookRoutes } = require("./hook.routes");

const v1Routes = express.Router();

v1Routes.use("/hook", hookRoutes);

module.exports = { v1Routes };
