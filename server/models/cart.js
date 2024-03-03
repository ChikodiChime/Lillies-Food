const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who owns the cart
    items: [{
      mealId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal', required: true },
      name: { type: String, required: true }, // Populated from the meal schema
      price: { type: Number, required: true  }, // Populated from the meal schema
      summary: { type: String, required: true  }, // Populated from the meal schema
      stock: { type: Number, required: true  }, // Populated from the meal schema
      quantity: { type: Number, required: true },
  
    }],
  
    createdAt: { type: Date, default: Date.now }, // Date when the cart was created
    updatedAt: { type: Date, default: Date.now }, // Date when the cart was last updated
});

module.exports = mongoose.model('Cart', cartSchema);
