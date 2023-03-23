const { Mange } = require("../models");

const mangedata = [
  {
    email: "mount.photos@gmail.com",
    password: "Colorado2018!",
  },
];

const seedMange = () => Mange.bulkCreate(mangedata);

module.exports = seedMange;
