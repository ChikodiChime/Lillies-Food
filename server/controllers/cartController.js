const Cart = require('../models/cart');


exports.addItemToCart = async (req, res) => {
  try {
    const { userId, mealId, name, price, summary,quantity, details, prepTime, stock } = req.body;
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }
// console.log(cart.items)
  const existingItemIndex = cart.items.findIndex(item => item.mealId.toString() === mealId);
  if (existingItemIndex !== -1) {
    // If item already exists in cart, update its quantity
    cart.items[existingItemIndex].quantity += quantity;
    console.log(cart.items[existingItemIndex].quantity)
  } else {
    cart.items.push({ mealId, name, price, summary, quantity, details, prepTime, stock });
  }



    await cart.save();
    res.status(200).json(cart);
    console.log('Item added to cart');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.getCart = async(req, res) => {
  try{
      const cart = await Cart.find({});
      res.json(cart);

  }catch (error){
      console.error('Error fetching cart:', error)
      res.status(500).json({message: 'Internal server error'})
  }
}


// Controller function to update item quantity in cart
exports.updateCartItem = async (req, res) => {
  try {
    const { cartItems } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find(item => item.mealId === mealId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }



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
    
    const cartItemIndex = cart.items.findIndex(item => {
      console.log(item.mealId.toString(), mealId)
      return item.mealId.toString() === mealId;
    });
    if (cartItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

   cart.items.splice(cartItemIndex, 1);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
