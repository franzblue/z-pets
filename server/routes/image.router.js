const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT "name" FROM "image" ORDER BY RANDOM() LIMIT 1;'
    pool.query(queryText)
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });



/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;