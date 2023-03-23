const { Rating } = require("../models");

const ratingdata = [
  {
    review: "The Butter Milk Pancakes look amazing!",
    account_id: 1,
    product_id: 3,
  },
  {
    review:
      "Eww, more Avocado Toast. Can't these gen Z and Millennials just eat pancakes like the rest of us!",
    account_id: 2,
    product_id: 7,
  },
  {
    review: "Oh I could really be down for that Breakfast Burrito",
    account_id: 3,
    product_id: 5,
  },
  {
    review:
      "Other than Pancakes, French Toast is my next favorite Breakfast Food!",
    account_id: 1,
    product_id: 6,
  },
  {
    review:
      "Yo Avocado Toast is so good! The nachos weren't loaded enough though.",
    account_id: 4,
    product_id: 7,
  },
  {
    review: "The Devlore burger is crazy good.",
    account_id: 4,
    product_id: 7,
  },
];

const seedRatings = () => Rating.bulkCreate(ratingdata);

module.exports = seedRatings;
