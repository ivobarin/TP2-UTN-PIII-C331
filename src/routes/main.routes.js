const router = require("express").Router();

const {index} = require("../controllers/main.controller.js");

router.get("/", index);

module.exports = router;