const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/api/:search', (req, res, next) => {
  Promise.resolve()
    .then(() => {
      throw new Error('BROKEN');
    })
    .catch(next);
});

router.post('/api/:search', (req, res) => {
  const list = ['string1', 'string5'];
  res.send(list);
});

module.exports = router;
