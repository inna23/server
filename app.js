const express = require('express');
const app = express();
const productRouts = require('./api/routes/products');

app.use('/products', productRouts);

module.exports = app;
