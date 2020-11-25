const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.get('/', rejectUnauthenticated, (req, res) => {
    // GET route code here
    // Data to populate admin table
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
    // Data to populate admin table, omits password
    const queryText = `SELECT "id", "username", "admin", "last_logged" FROM "user";`
    pool.query(queryText)
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // route to delete unruly z-pets
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

router.delete('/user/:id', rejectUnauthenticated, (req, res) => {
    // route to delete users
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

router.put('/user/:id', rejectUnauthenticated, (req, res) => {
    // tracks when a user last logged in
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

router.put('/create/:id', rejectUnauthenticated, (req, res) => {
    // this grants admin privileges to user
  let userId = req.params.id;
  let queryText = `UPDATE "user" SET "admin" = true WHERE id = $1;`;
  pool.query(queryText, [userId]).then((result) => {
      console.log(result);
      res.sendStatus(200);
  }).catch((error) => {
      console.log('error updating last logged', error);
      res.sendStatus(500);
  });
});

module.exports = router;