const Rating = require("./Rating.js");
const Food = require("./Food.js");
const Beta = require("./BetaTaster.js");
const Mange = require("./management.js");

// Mange.hasMany(Food, {
//   foreignKey: " management_id",
// });

// Food.hasMany(Rating, {
//   foreignKey: "food_id",
// });

// Beta.hasMany(Rating, {
//   foreignKey: "user_id",
// });

// Rating.belongsTo(Beta, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

module.exports = { Rating, Food, Beta, Mange };
