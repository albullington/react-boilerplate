const bodyParser = require('body-parser');
const express = require('express');
const db = require('../../database/index');

const router = express.Router();
router.use(bodyParser.json());

router.get('/', (req, res) => {
  db.any('SELECT * FROM strings;')
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      if (err) throw err;
    });
});

router.post('/', (req, res) => {
  const newString = 'INSERT INTO strings VALUE ($1)';
  db.none(newString, [req.body.searchTerm])
    .then(() => {
      res.send('String posted successfully');
    })
    .catch(err => {
      if (err) throw err;
    });
});

module.exports = router;
