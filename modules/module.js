const mongoose = require("mongoose");

// Define the schema for price history
const priceHistorySchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  lastUpdatedAt: {
    type: Date,
    required: true,
  },
});

// Define the main schema
const apiSchema = new mongoose.Schema({
  averageStockPrice: {
    type: Number,
    required: true,
  },
  priceHistory: {
    type: [priceHistorySchema], // Array of price history objects
    required: true,
  },
});

// Create the model
const apiModel = mongoose.model("api", apiSchema);

module.exports = apiModel;