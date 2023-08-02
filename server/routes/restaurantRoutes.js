const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// import controller file
const controller = require('../controllers/controller.js');

// declaring router for restaurant routes
const restaurantRouter = express.Router();

restaurantRouter.get('/', controller.getRestaurants, (req, res) => {
  res.status(200).json(res.locals.restaurants);
});

restaurantRouter.post('/', controller.getRestaurants, (req, res) => {
  res.status(200).json(res.locals.restaurants);
});


module.exports = restaurantRouter;