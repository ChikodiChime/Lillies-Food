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

const allowedOrigins = ['https://lillies-food-to43.vercel.app'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials (cookies, authorization headers, TLS client certificates)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
  allowedHeaders: 'Content-Type,Authorization', // Allow these headers
  preflightContinue: false,
  optionsSuccessStatus: 204 // Respond with status 204 for OPTIONS requests
};

app.use(cors(corsOptions));
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
