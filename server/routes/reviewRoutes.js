const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// import controller file
const controller = require('../controllers/controller.js');

// declaring router for restaurant routes
const reviewRouter = express.Router();

reviewRouter.post('/', controller.submitReview, (req, res) => {
res.status(200).json(res.locals.addedReview)
});


module.exports = reviewRouter;