const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

// Morgan http logging for debugging in terminal
app.use(morgan('short'));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect routes to app
app.use('/', routes);

//Server setup
const PORT = process.env.PORT ||5000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
