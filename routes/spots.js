const express = require('express');
const router = express.Router();
const { Spot } = require("../db.js");

// sequelize model:generate --name Spot --attributes test:string
// Then delete test attibute in migration file

/* Spots */
/* GET */
router.get('/spots', function(req, res, next) {
    res.json({
      message: {id: 1}
    })
});

/* POST */
router.post('/spots', function(req, res, next) {
    res.json({message: 'Your table has been created'});
});

/* PUT */
router.put('/spots', function(req, res, next) {
    res.json({message: 'Your table has been updated'});
});

/* DELETE */
router.delete('/spots', function(req, res, next) {
    res.json({message: 'Your table has been deleted'});
  }
);


module.exports = router;
