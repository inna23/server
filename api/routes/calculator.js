const express = require('express');
const router = express.Router();

//Sum
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'calculator '
  })
});


router.post('/sum', (req, res, next) => {
  let sum = req.body.a + req.body.b;
  res.status(200).json(sum);
});


//

module.exports = router;
