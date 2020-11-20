const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM "z-pet";`
    pool.query(queryText)
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

  router.get('/user', rejectUnauthenticated, (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM "user";`
    pool.query(queryText)
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

router.delete('/:id', (req, res) => {
    let petId = req.params.id;
    let queryText = `DELETE FROM "z-pet" WHERE "id" = $1;`;
    pool.query(queryText, [petId]).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in post', error);
        res.sendStatus(500);
    });
});

router.delete('/user/:id', (req, res) => {
    let userId = req.params.id;
    let queryText = `DELETE FROM "user" WHERE "id" = $1;`;
    pool.query(queryText, [userId]).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in post', error);
        res.sendStatus(500);
    });
});

router.put('/user/:id', (req, res) => {
    console.log(req.params.id);
    let userId = req.params.id;
    let queryText = `UPDATE "user" SET "last_logged" = NOW() WHERE id = $1;`;
    pool.query(queryText, [userId]).then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error updating last logged', error);
        res.sendStatus(500);
    });
});

  module.exports = router;