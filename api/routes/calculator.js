const express = require('express');
const router = express.Router();

//Sum
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'calculator'
  })
});


router.post('/sum', (req, res, next) => {
  let sum = parseInt(req.body.a, 10) + parseInt(req.body.b, 10);
  res.status(200).json(sum);
});

router.post('/sub', (req, res, next) => {
  let sum = parseInt(req.body.a, 10) - parseInt(req.body.b, 10);
  res.status(200).json(sum);
});

//

module.exports = router;
