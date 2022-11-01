var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json([
    { id: 1, username: "VictorOladipo" },
    { id: 2, username: "RussellWestbrook" },
  ]);
});

module.exports = router;
