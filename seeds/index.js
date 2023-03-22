const sequelize = require("../config/connection");
const seedFood = require("./Food-seed.js");
const seedRatings = require("./Rating-seed.js");
// const betaTasters = require("./BetaTaster");
// const management = require("./management");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");

  await seedFood();

  console.log("\n----- FOOD SEEDED -----\n");

  await seedRatings();

  console.log("\n----- RATINGS SEEDED -----\n");

//   await betaTasters();

  console.log("\n----- BETATASTERS SEEDED -----\n");

//   await management();

  console.log("\n----- MANAGEMENT SEEDED -----\n");

  process.exit(0);
};

seedAll();
