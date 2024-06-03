const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose'); // No need to destructure mongoose
const cookieParser = require('cookie-parser');
const app = express();
const cartRoutes = require('./routes/Cart');
const mealRoutes = require('./routes/mealRoutes');

// db connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database not connected', err));


app.use(cors({
  origin: "https://lillies-food-to43.vercel.app"
}
))
app.options('*', cors())
app.use(cookieParser());

// Middleware for parsing JSON bodies
app.use(express.json({ limit: '10mb' }));

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/', require('./routes/authRoutes'));
app.use('/api/cart', cartRoutes);
app.use('/api/meal', mealRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
