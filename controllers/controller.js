const apiModel = require("../modules/module.js");

// Function to create a new document
const createApiData = async (req, res) => {
  try {
    const { averageStockPrice, priceHistory } = req.body;

    // Create a new document
    const newApiData = new apiModel({
      averageStockPrice,
      priceHistory,
    });

    // Save to the database
    const savedData = await newApiData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get all documents
const getAllApiData = async (req, res) => {
  try {
    const data = await apiModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createApiData,
  getAllApiData,
};