const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // Reference to the user who owns the cart
    
      mealId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
      quantity: { type: Number }, 

      // img: { type: String },
      name: { type: String }, // Name of the meal
      price: { type: Number }, // Price of the meal
      summary: { type: String }, 
      details: { type: String }, 
      prepTime: { type: Number }, 
      stock: { type: Number }, 
    
    createdAt: { type: Date, default: Date.now }, // Date when the cart was created
    updatedAt: { type: Date, default: Date.now }, // Date when the cart was last updated
});
cartSchema.add({
  items: [{
    mealId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
    quantity: { type: Number }, 

    // img: { type: String },
    name: { type: String }, // Name of the meal
    price: { type: Number }, // Price of the meal
    summary: { type: String }, 
    details: { type: String }, 
    prepTime: { type: Number }, 
    stock: { type: Number }, 
  }]
})

module.exports = mongoose.model('Cart', cartSchema);
