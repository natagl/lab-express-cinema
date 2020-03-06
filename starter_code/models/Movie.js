const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: { type: [String] },
  image: { type: String },
  description: { type: String },
  showtimes: { type: [String] }
});

const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies; //to export Movies model
