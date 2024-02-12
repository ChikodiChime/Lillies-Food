const mongoose = require('mongoose');

// Define schema for shopping cart
const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
      name: { type: String, required: true }, // Reference to the meal name
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      // Other fields as needed
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  

// Define model for shopping cart
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
