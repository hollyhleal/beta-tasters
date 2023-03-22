const { Beta } = require("../models");

const Betadata = [
    {
        username: "WednesdayA",
        email:"WednesdayAddams@gmail.com",
        password: 
          "IDontCare5",
      },
      {
        username: "light1010",
        email:"yagami@hotmail.com",
        password: 
          "TheNote",
      },
      {
        username: "Marvin_Will",
        email:"Marvinwill@icloud.com",
        password: 
          "123456",
      },
      {
        username: "LebronJames",
        email:"LebronJames@yahoo.com",
        password: 
          "TheKing24",
      },
]

const seedBeta = () => Beta.bulkCreate(Betadata);

module.exports = seedBeta;
