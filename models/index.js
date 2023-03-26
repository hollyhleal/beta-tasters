const Rating = require("./Rating.js");
const Food = require("./Food.js");
const Beta = require("./BetaTaster.js");
const Manage = require("./management.js");

Manage.hasMany(Food);
Food.belongsTo(Manage, {
  foreignKey: "management_id",
});

Beta.hasMany(Rating);
Rating.belongsTo(Beta, {
  foreignKey: "user_id",
});

module.exports = { Rating, Food, Beta, Manage };
