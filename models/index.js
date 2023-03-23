const Rating = require("./Rating.js");
const Food = require("./Food.js");
const Beta = require("./BetaTaster.js");
const Mange = require("./management.js");

Mange.hasMany(Food);
Food.belongsTo(Mange, {
  foreignKey: "management_id",
});

Beta.hasMany(Rating);
Rating.belongsTo(Beta, {
  foreignKey: "user_id",
});

// Beta.hasMany(Rating, {
//   foreignKey: "user_id",
// });

// Rating.belongsTo(Beta, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

module.exports = { Rating, Food, Beta, Mange };
