const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const config = require("./config");
const routes = require("./routes");

const app = express();

// set security HTTP headers
app.use(helmet());

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));

// Listen to Root route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// v1 api routes
app.use("/api/v1", routes.v1Routes);

// set port, listen for requests
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}.`);
});
