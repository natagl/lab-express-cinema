const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie"); //importining data
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs", {});
});
router.get("/movies", (req, res, next) => {
  Movies.find.then(moviesArr => {
    res.render("movies.hbs", { moviesArr });
  });
});
// router.get("/newpage", (req, res, next) => {
//   res.render("newpage");
// });

module.exports = router;
