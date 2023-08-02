const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3000;

// import controller file
const controller = require('./controller.js');

// enable cors + parse json
app.use(cors());
app.use(express.json());

// GET route: 'read' queries to restaurants table
app.get('/restaurants', controller.getRestaurants, (req, res) =>
  res.status(200).json(res.locals.restaurants)
);

app.post('/restaurants', controller.getRestaurants, (req, res) =>
  res.status(200).json(res.locals.restaurants)
);

// POST route: 'create' entries to insert into reviews table
app.post('/reviews', controller.submitReview, (req, res) =>
  res.status(200).json(res.locals.addedReview)
);

// unknown route handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express caught unknown error in global error handler',
    status: 500,
    message: { err: 'An error occurred.' },
  };
  const errorObj = Object.assign({ ...defaultErr, ...err });
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message.err);
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
