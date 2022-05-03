const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const config = require("config");
require("dotenv").config();
const mongoose = require("mongoose");
const mongooseConnectionString = config.get("db.con.conString");
mongoose
  .connect(mongooseConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MONGODB"))
  .catch((err) => {
    throw err;
  });
const sectores = require("./src/routes/sectores");
const vias = require("./src/routes/vias");
const images = require("./src/routes/images");
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static("public"));

app.use("/api/sectores", sectores);
app.use("/api/vias", vias);
app.use("/api/images", images);

module.exports = app;
