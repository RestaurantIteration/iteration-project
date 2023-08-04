const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// import restaurantRoutes router file
const restaurantRouter = require('./routes/restaurantRoutes.js');

// import restaurantRoutes router file
const reviewRouter = require('./routes/reviewRoutes.js');

// import googleRoutes router fil
const googleRouter = require('./routes/googleRoutes.js');

// serve static files
app.use('/public', express.static(path.resolve(__dirname, '../public')));

// enable cors + parse json
app.use(cors());
app.use(express.json());

// route handler that will invoke reviewRouter middleware once a restaurant card is clicked
app.use('/api/restaurant', reviewRouter);

// googleRouter route handler for '/google' url
app.use('/api/google', googleRouter);

// route handler that will load the page upon initial render
app.use('/api/', restaurantRouter);

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
