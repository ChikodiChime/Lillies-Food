const Meal = require('../models/meal');

exports.addMeal = async(req, res) => {
    try{
        const {img, name, price, summary, details, prepTime, stock} = req.body;
console.log(req.body)
        if (!img) {
            return res.json({
                error: 'please input image'
            })
        }
        if (!name) {
            return res.json({
                error: 'please input name'
            })
        }
        if (!price) {
            return res.json({
                error: 'please input price'
            })
        }
        if (!summary) {
            return res.json({
                error: 'please input summary'
            })
        }
        if (!details) {
            return res.json({
                error: 'please input details'
            })
        }
        if (!prepTime) {
            return res.json({
                error: 'please input prepTime'
            })
        }
        if (!stock) {
            return res.json({
                error: 'please input stock'
            })
        }
        const meal = await Meal.create({
            img,
            name,
            price,
            summary,
            details,
            prepTime,
            stock
        }) 
        console.log('meal added')
    }
    catch (error){
        console.error('Error adding Meal:', error)
        res.status(500).json({message: 'Internal Server Error'})
    }
}
exports.getMeal = async(req, res) => {
    try{
        const meals = await Meal.find({});
        res.json(meals);

    }catch (error){
        console.error('Error fetching meals:', error)
        res.status(500).json({message: 'Internal server error'})
    }
}