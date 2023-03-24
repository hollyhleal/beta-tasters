const { Rating } = require("../models");

const ratingdata = [
  {
    review: "The Butter Milk Pancakes look amazing!",
    rating: 4,
    user_id: 1,
    food_id: 3,
  },
  {
    review:
      "Eww, more Avocado Toast. Can't these gen Z and Millennials just eat pancakes like the rest of us!",
    rating: 2,
    user_id: 2,
    food_id: 7,
  },
  {
    review: "Oh I could really be down for that Breakfast Burrito",
    rating: 4,
    user_id: 3,
    food_id: 5,
  },
  {
    review:
      "Other than Pancakes, French Toast is my next favorite Breakfast Food!",
    rating: 3,
    user_id: 1,
    food_id: 6,
  },
  {
    review:
      "Yo Avocado Toast is so good! The nachos weren't loaded enough though.",
    rating: 3,
    account_id: 4,
    product_id: 7,
  },
  {
    review: "The Devlore burger is crazy good.",
    rating: 5,
    account_id: 4,
    product_id: 7,
  },
];

const seedRatings = () => Rating.bulkCreate(ratingdata);

module.exports = seedRatings;
