const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "z-pets" 
                     JOIN "user" ON "z-pets"."user_id" = 1 
                     WHERE "z-pets"."health" > 0 
                     ORDER BY "user"."id" ASC LIMIT 1;`
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
  console.log('POST pets route with:', req.user);
  const name = req.body.name;
  const temperament = req.body.temperament;
  const queryText = `INSERT INTO "z-pets" ("name", "birthday", "temperament", "user_id") VALUES ($1, NOW(), $2, $3);`;
  pool.query(queryText, [name, temperament, req.user.id])
    .then(() => { res.sendStatus(201)})
    .catch((error) => {
        console.log('Error', error);
        res.sendStatus(500);
    });
});

module.exports = router;
