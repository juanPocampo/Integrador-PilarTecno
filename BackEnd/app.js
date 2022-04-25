const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
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
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/sectores", sectores);
app.use("/vias", vias);

module.exports = app;
