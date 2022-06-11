const express = require("express");
const { checkSource } = require("../../middleware/")
const { hooksController } = require("../../controller")

const hookRoutes = express.Router();

hookRoutes.get("/", (req, res) => {
    res.send("Hook route")
})

hookRoutes.post("/create", checkSource, hooksController.createOrder)

hookRoutes.post("/update", (req, res) => {
    res.send("From v1 route Update");
}
);

module.exports = { hookRoutes };
