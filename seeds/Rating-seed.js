const { Rating } = require("../models");

const ratingdata = [
  {
    review: "The Butter Milk Pancakes look amazing!",
    user_id: 1,
    food_id: 3,
  },
  {
    review:
      "Eww, more Avocado Toast. Can't these gen Z and Millennials just eat pancakes like the rest of us!",
    user_id: 2,
    food_id: 7,
  },
  {
    review: "Oh I could really be down for that Breakfast Burrito",
    user_id: 3,
    food_id: 5,
  },
  {
    review:
      "Other than Pancakes, French Toast is my next favorite Breakfast Food!",
    user_id: 1,
    food_id: 6,
  },
  {
    review: "Yo Avocado Toast is so good!",
    user_id: 4,
    food_id: 7,
  },
];

const seedRatings = () => Rating.bulkCreate(ratingdata);

module.exports = seedRatings;
