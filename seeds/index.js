const sequelize = require("../config/connection.js");
const seedFood = require("./Food-seed.js");
const seedRating = require("./Rating-seed.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");

  await seedFood();

  console.log("\n----- FOOD SEEDED -----\n");

  await seedRating();

  console.log("\n----- RATINGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
