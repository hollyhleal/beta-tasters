const router = require("express").Router();
const { Food } = require("../../models");

// create a new menu item
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

// update existing menu item
router.put("/:id", async (req, res) => {
  try {
    const foodData = await Food.update(
      {
        Food_name: req.body.food_name,
        description: req.body.description,
        price: req.body.price,
      },
      {
        where: {
          food_id: req.params.id,
        },
      }
    );
    if (!foodData) {
      res.status(400).json({ message: "No food item found with that id." });
      return;
    }
    res.status(200).json(foodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // delete existing menu items
// router.delete("/:id", async (req, res) => {
//   try {
//     const foodData = await Food.destroy({
//       where: {
//         food_id: req.params.id,
//       },
//     });
//     res.status(200).json(foodData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
