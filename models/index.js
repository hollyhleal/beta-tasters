const Rating = require("./Rating.js");
const Food = require("./Food.js");
const Beta = require("./BetaTaster.js");
const Mange = require("./management.js");

Mange.hasMany(Food, {
  foreignKey: " management_id",
  onDelete: "CASCADE",
});

Food.hasMany(Rating, {
  foreignKey: "food_id",
  onDelete: "CASCADE",
});

Beta.hasMany(Rating, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { Rating, Food, Beta, Mange };
