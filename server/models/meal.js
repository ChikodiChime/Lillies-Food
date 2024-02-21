const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    img: { type: String },
    name: { type: String, required: true }, // Name of the meal
    price: { type: Number, required: true }, // Price of the meal
    summary: { type: String }, 
    details: { type: String }, 
    prepTime: { type: Number }, 
    stock: { type: Number }, 
    createdAt: { type: Date, default: Date.now }, // Date when the meal was created
    updatedAt: { type: Date, default: Date.now }, // Date when the meal was last updated
});

module.exports = mongoose.model('Meal', mealSchema);
