const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

const cors = require('cors');

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

// Route to add item to cart
router.post('/add', cartController.addItemToCart);

// Route to update item quantity in cart
router.put('/cart/update/:userId/:mealId', cartController.updateCartItem);

// Route to remove item from cart
router.delete('/cart/remove/:userId/:mealId', cartController.removeItemFromCart);

module.exports = router;
