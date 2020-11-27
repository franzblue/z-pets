const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  // get all pet data
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

router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  // creates new z-pet
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
  // increases pet health after feeding
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
  // decreases pet health due to hunger
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
  // tires out pet after walking
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
  // statistic for how many crickets eaten by all pets
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
  // increases energy as pet sleeps
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
  // lowers happy of pet
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

router.put("/age/:id", rejectUnauthenticated, (req, res) => {
  // route to track pets age
  const queryText = `UPDATE "z-pet" SET "age" = "age" + 1 WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      alert("error in age", error);
    });
});

router.put("/poo/:id", rejectUnauthenticated, (req, res) => {
  // poop route
  const queryText = `UPDATE "z-pet" SET "crickets_eaten" = "crickets_eaten" + 1 WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      alert("error in age", error);
    });
});

router.delete('/restart/:id', rejectUnauthenticated, (req, res) => {
  // route to delete z-pet
  let userId = req.params.id;
  let queryText = `DELETE FROM "z-pet" WHERE "id" = $1;`;
  pool.query(queryText, [userId]).then((result) => {
      console.log(result);
      res.sendStatus(200);
  }).catch((error) => {
      console.log('error in post', error);
      res.sendStatus(500);
  });
});



module.exports = router;