const sequelize = require("../config/connection");
const seedFood = require("./Food");
const seedRatings = require("./Rating");
const betaTasters = require("./BetaTaster");
const management = require("./management");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFood();

  await seedRatings();

  await betaTasters();

  await management();

  process.exit(0);
};

seedAll();
