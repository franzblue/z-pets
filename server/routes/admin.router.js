const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM "z-pets";`
    pool.query(queryText)
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

router.delete('/:id', (req, res) => {
    let petId = req.params.id;
    let queryText = `DELETE FROM "z-pets" WHERE "id" = $1;`;
    pool.query(queryText, [petId]).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in post', error);
        res.sendStatus(500);
    });
});

  module.exports = router;