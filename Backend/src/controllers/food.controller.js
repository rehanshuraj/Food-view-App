const foodModel = require("../models/food.model");
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid');

// Controller to create food item
async function createFood(req, res) {
  try {
    // Upload file
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

    // Create food item in DB
    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: fileUploadResult.url,
      foodPartnerId: req.foodPartner._id
    });

    // Send single response
    res.status(201).json({
      message: "Food item created successfully",
      food: foodItem
    });

    console.log("Request body:", req.body);
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
