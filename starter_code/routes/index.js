const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie"); //importining data
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

router.get("/movies", (req, res, next) => {
  Movie.find()//finding all movies
    .then(moviesArr => {
      res.render("movie-pages/movies", { moviesArr });//rendering movie, adn passing movieArr
    })
    .catch(err => console.log(err));
});
 router.get("/movie/:movieId", (req, res, next) => {
   Movie.findById(req.params)
//   res.render("movie-pages/movies", { moviesArr });
// })
// .catch(err => console.log(err));

module.exports = router;
