const { Food } = require("../models");

const fooddata = [
  {
    Food_name: "FreshBerry Crepes",
    description:
      "4 crepes folded & topped with fresh blueberries and strawberries",
    price: 12.0,
    management_id: 2,
  },
  {
    Food_name: "Breakfast Sampler",
    description:
      "Two eggs* your way, hickory smoked bacon, 2 sausage, 2 pieces of ham, golden hash browns",
    price: 15.0,
    management_id: 2,
  },
  {
    Food_name: "Buttermilk Pancakes",
    description: "Five fluffy pancakes with real butter",
    price: 10.0,
    management_id: 2,
  },
  {
    Food_name: "Belgian Waffle",
    description: "House made belgian waffle with real butter",
    price: 12.0,
    management_id: 2,
  },
  {
    Food_name: "Breakfast burrito",
    description:
      "A true breakfast classic with scrambled eggs, choice of bacon or sausage, shredded Jack & Cheddar and hash browns. Served with a side of our salsa",
    price: 8.0,
    management_id: 1,
  },
  {
    Food_name: "French Toast",
    description: "Thick and fluffy french toast with a side of your choice",
    price: 14.0,
    management_id: 3,
  },
  {
    Food_name: "Avocado Toast",
    description:
      "Grilled multigrain bread topped with fresh avocado & roasted cherry tomatoes. served with side of choice",
    price: 15.0,
    management_id: 2,
  },

  {
    Food_name: "Fresh Berry Crepes",
    description:
      "4 crepes folded & topped with fresh blueberries and strawberries",
    price: 13.0,
    management_id: 5,
  },
  {
    Food_name: "Breakfast Sampler",
    description:
      "Two eggs* your way, hickory smoked bacon, 2 sausage, 2 pieces of ham, golden hash browns",
    price: 15.0,
    management_id: 1,
  },
  {
    Food_name: "Monte Cristo",
    description:
      "Ham and turkey with melted swiss cheese. Topped with powdered sugar and served with strawberry jam",
    price: 13.0,
    management_id: 2,
  },
  {
    Food_name: "The Devlore Burger",
    description:
      "Two 1/3-lb Angus Patties topped with pepperjack cheese and onion straws. Served with our famous housemade Devlore sauce and a side of your choice",
    price: 16.0,
    management_id: 2,
  },
  {
    Food_name: "Wing Platter",
    description: "Thick and juicy Wings covered in your choice of Sauce!",
    price: 13.0,
    management_id: 2,
  },
  {
    Food_name: "Loaded Nachos",
    description:
      "Tortilla chips topped with refried beans, ground beef, onion, cheddar cheese, tomatoes, avocado, and sour cream",
    price: 13.0,
    management_id: 3,
  },
  {
    Food_name: "Chicken Fried Steak",
    description:
      "Tender steak, breaded and fried golden brown, smothered with country gravy. Served with mashed potatoes and green beans",
    price: 18.0,
    management_id: 1,
  },
  {
    Food_name: "Golden Chicken Strips",
    description:
      "Five crispy strips served with fries and a choice of BBQ sauce or ranch dressing",
    price: 15.0,
    management_id: 4,
  },
  {
    Food_name: "Fish & Chips",
    description:
      "3 battered and fried white fish filets served with tartar sauce and coleslaw",
    price: 18.0,
    management_id: 1,
  },
];

const seedFood = () => Food.bulkCreate(fooddata);

module.exports = seedFood;
