const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating (1 to 5)
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
