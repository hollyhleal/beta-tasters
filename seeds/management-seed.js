const { ManageSeed } = require("../models");

const ManageData = [
  {
    email: "devlorecafeimposter@outlook.com",
    password: "devLoreCafe4$",
  },
  {
    email: "mastermerchant@gmail.com",
    password: "merchant55!",
  },
  {
    email: "larimersquare@hotmail.com",
    password: "buyOurDrinks3#",
  },
  {
    email: "spidermanenterprises@gmail.com",
    password: "definitelynotpeterparker2@",
  },
  {
    email: "pepperonicalzones@hotmail.com",
    password: "weOnlyHavePepperoni1!",
  },
];

const seedManage = () => ManageSeed.bulkCreate(ManageData);

module.exports = seedManage;
