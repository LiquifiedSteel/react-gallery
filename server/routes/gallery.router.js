const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let reqId = req.params.id;
    console.log("In PUT purchase route");
    const query = `UPDATE gallery SET "likes"=("likes"+1) WHERE "id" = $1;`;
    pool.query(query, [reqId]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making PUT', error);
        res.sendStatus(500);
    });
});

// GET route to get all the images from the database
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY "id" ASC;`;
  pool.query(sqlText)
      .then((result) => {
          console.log(`Got gallery back from the database`, result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      })
})

module.exports = router;
