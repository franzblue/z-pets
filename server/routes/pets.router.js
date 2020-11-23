const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const user = req.user.id
  const queryText = `SELECT * FROM "z-pet"  
                     WHERE "z-pet"."user_id" = $1 LIMIT 1;`
  pool.query(queryText, [user])
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('POST pets route with:', req.user);
  const name = req.body.name;
  const temperament = req.body.temperament;
  const queryText = `INSERT INTO "z-pet" ("name", "temperament", "birthday", "weight", "user_id") VALUES ($1, $2, NOW(), CAST(RANDOM() * 100 AS INT), $3);`;
  pool.query(queryText, [name, temperament, req.user.id])
    .then(() => { res.sendStatus(201)})
    .catch((error) => {
        console.log('Error', error);
        res.sendStatus(500);
    });
});

router.put("/feed/:id", rejectUnauthenticated, (req, res) => {
    console.log('hello from feed router', req.params.id);
    const queryText = `UPDATE "z-pet" SET "health" = "health" + 10, "weight" = "weight" + 1, "crickets_eaten" = "crickets_eaten" + 1 WHERE "id" = $1;`;
    pool
      .query(queryText, [req.params.id])
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        res.sendStatus(500);
        alert("error", error);
      });
});
  
router.put("/hunger/:id", rejectUnauthenticated, (req, res) => {
  console.log('hello from hunger router', req.params.id);
  const queryText = `UPDATE "z-pet" SET "health" = "health" - 10 WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      alert("error", error);
    });
});

router.put("/walk/:id", rejectUnauthenticated, (req, res) => {
  console.log('hello from walk router', req.params.id);
  const queryText = `UPDATE "z-pet" SET "energy" = "energy" - 10 WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      alert("error", error);
    });
});

router.get('/crickets', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT SUM("crickets_eaten") FROM "z-pet";`;
  pool.query(queryText)
    .then((results) => {
      let crickets = results.rows[0]
      res.send(crickets)
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.put("/sleep/:id", rejectUnauthenticated, (req, res) => {
  console.log('hello from sleep router', req.params.id);
  const queryText = `UPDATE "z-pet" SET "energy" = "energy" + 10 WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      alert("error in sleep", error);
    });
});

router.put("/hurt/:id", rejectUnauthenticated, (req, res) => {
  console.log('hello from sleep router', req.params.id);
  const queryText = `UPDATE "z-pet" SET "happy" = "happy" - 10 WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      alert("error in hurt", error);
    });
});

module.exports = router;
