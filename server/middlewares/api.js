const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.post('/api/:search', (req, res) => {
  const searchTerm = req.params;
  const list = ['string1', 'string5'];
  list.push(searchTerm);
  res.send(searchTerm);
});

module.exports = router;
