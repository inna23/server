const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello on test server created by Inna Oreshkevych',
    product: 'Product page  https://tranquil-spire-74602.herokuapp.com/products',
    task: 'Task page https://tranquil-spire-74602.herokuapp.com/tasks'
  })
});


module.exports = router;
