const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const user = req.user.id
  const queryText = `SELECT * FROM "z-pets"  
                     WHERE "z-pets"."user_id" = $1 LIMIT 1;`
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
router.post('/', (req, res) => {
  // POST route code here
  console.log('POST pets route with:', req.user);
  const name = req.body.name;
  const temperament = req.body.temperament;
  const queryText = `INSERT INTO "z-pets" ("name", "birthday", "weight", "temperament", "user_id") VALUES ($1, NOW(), CAST(RANDOM() * 100 AS INT), $2, $3);`;
  pool.query(queryText, [name, temperament, req.user.id])
    .then(() => { res.sendStatus(201)})
    .catch((error) => {
        console.log('Error', error);
        res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
    console.log('hello from router', req.params.id);
    const queryText = `UPDATE "z-pets" SET "health" = "health" + 10, "weight" = "weight" + 1 WHERE "id" = $1;`;
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
  

module.exports = router;
