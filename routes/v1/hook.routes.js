const express = require("express");

const hookRoutes = express.Router();

hookRoutes.get("/", (req, res) => {
    res.send("From v1 route");
});

module.exports = { hookRoutes };
