const Cart = require('../models/cart');

// Controller function to add item to cart
exports.addItemToCart = async (req, res) => {
  try {
    const { userId, mealId, name, quantity, price } = req.body;

    // Check if the item already exists in the cart
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.mealId === mealId);
    if (existingItem) {
      // If item already exists, update quantity
      existingItem.quantity += quantity;
    } else {
      // If item doesn't exist, add it to the cart
      cart.items.push({ mealId, name, quantity, price });
    }

    await cart.save();
    res.status(200).json(cart);
    console.log('Item added to cart');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Controller function to update item quantity in cart
exports.updateCartItem = async (req, res) => {
  try {
    const { userId, mealId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find(item => item.mealId === mealId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    item.quantity = quantity;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to remove item from cart
exports.removeItemFromCart = async (req, res) => {
  try {
    const { userId, mealId } = req.params;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.mealId !== mealId);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
