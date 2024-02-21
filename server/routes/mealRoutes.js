const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController')

const cors = require('cors');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
   
}))

router.post('/add', mealController.addMeal);
router.get('/meals', mealController.getMeal);

module.exports = router;