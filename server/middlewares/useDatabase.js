const bodyParser = require('body-parser');
const express = require('express');
const { fetchStrings, addStrings } = require('../../database/index');

const router = express.Router();
router.use(bodyParser.json());

router.get('/', (req, res) => {
  fetchStrings()
    .then(results => {
      res.sendStatus(200);
      res.end(JSON.stringify(results));
    })
    .catch(err => {
      if (err) throw err;
      res.end('');
    });
});

router.post('/', (req, res) => {
  addStrings(req.body.string)
    .then(results => {
      res.sendStatus(200);
      res.end(JSON.stringify(results));
    })
    .catch(err => {
      if (err) throw err;
      res.end('');
    });
});

module.exports = router;
