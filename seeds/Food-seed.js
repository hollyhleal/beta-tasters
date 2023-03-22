const { Food } = require("../models");

const fooddata = [
  {
    Food_name: "freshBerry Crepes",
    description:
      "4 crepes folded & topped with fresh blueberries and strawberries",
  },
  {
    Food_name: "Breakfast Sampler",
    description:
      "two eggs* your way, hickory smoked bacon, 2 sausage, 2 pieces of ham, golden hash browns",
  },
  {
    Food_name: "buttermilk pancakes",
    description: "five fluffy pancakes with real butter",
  },
  {
    Food_name: "belgian waffle",
    description: "house made belgian waffle with real butter",
  },
  {
    Food_name: "Breakfast burrito",
    description:
      "A true breakfast classic with scrambled eggs, choice of bacon or sausage, shredded Jack & Cheddar and hash browns. Served with a side of our salsa",
  },
  {
    Food_name: "French Toast",
    description: "Thick and fluffy french toast with a side of your choice",
  },
  {
    Food_name: "Avocado Toast",
    description:
      "Grilled multigrain bread topped with fresh avocado & roasted cherry tomatoes. served with side of choice",
  },
];

const seedFood = () => Food.bulkCreate(fooddata);

module.exports = seedFood;
