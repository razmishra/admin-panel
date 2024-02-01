const express = require('express');
const getData = require('../controller/getData');
const Router = express.Router();

Router.get("/", getData)

module.exports = Router