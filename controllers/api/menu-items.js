const router = require("express").Router();
const { Food } = require("../../models");

// get all food items
router.get("/", async (req, res) => {
  try {
    const foodData = await Food.findAll({
      include: [{ model: Food }],
    });
    res.status(200).json(foodData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get food item by id
router.get("/:id", async (req, res) => {
  try {
    const foodId = await Food.findByPk(req.params.id);
    if (!foodId) {
      res.status(400).json({ message: "No food item found with that id." });
      return;
    }
    res.status(200).json(foodId);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add dish
router.post("/", async (req, res) => {
  try {
    const foodData = await Food.create({
      Food_name: req.body.food_name,
      description: req.body.description,
      price: req.body.price,
    });
    res.status(200).json(foodData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// create a new food item
router.post("/", async (req, res) => {
  try {
    const newFoodItem = await Food.create({
      Food_name: req.body.food_name,
      description: req.body.description,
      price: req.body.price,
    });
    res.status(200).json(newFoodItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
