const foodModel = require("../models/food.model");

// Controller to create food item
async function createFood(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No video file uploaded" });
    }
  

    // Save food item in DB
    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: req.file.path, // multer diskStorage gives .path
      foodPartnerId: req.body.foodPartnerId // pass in request for now
    });

    res.status(201).json({
      message: "Food item created successfully",
      food: foodItem
    });

    console.log("Food created:", foodItem);
  } catch (error) {
    console.error("Error creating food item:", error);
    res.status(500).json({ error: error.message });
  }
}

// Controller to get all food items
async function getFoodItems(req, res) {
  try {
    const foodItems = await foodModel.find({});
    res.status(200).json({
      message: "Food items fetched successfully",
      foodItems
    });
  } catch (error) {
    console.error("Error fetching food items:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createFood,
  getFoodItems
};
