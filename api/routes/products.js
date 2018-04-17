const express = require('express');
const router = express.Router();

//Products
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get request for products!!!!!!!!'
  })
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get request for products! '
  })
});
//

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  const test = req.params;
  res.status(200).json({
    message: 'Get request for products!',
    id,
    test
  })
});


module.exports = router;
