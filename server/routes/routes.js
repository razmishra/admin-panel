const express = require("express");
const getData = require("../controller/getData");
const Router = express.Router();

Router.get("/test", (req,res) => {
  return res.json({ message: "Server is running" });
});
Router.get("/", getData);

module.exports = Router;
