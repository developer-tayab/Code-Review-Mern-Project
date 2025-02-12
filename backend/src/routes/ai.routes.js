const getReview = require("../controllers/ai.controller");

const Router = require("express").Router();


Router.post("/get-review", getReview);

module.exports = Router;