const express = require('express');
const router = express.Router();
const { Room } = require("../db.js");

// sequelize model:generate --name Room --attributes test:string
// Then delete test attibute in migration file

/* Rooms */
/* GET */
router.get('/rooms', function(req, res, next) {
    res.json({
      message: {id: 1}
    })
});

/* POST */
router.post('/rooms', function(req, res, next) {
    res.json({message: 'Your room has been created'});
});

/* PUT */
router.put('/rooms', function(req, res, next) {
    res.json({message: 'Your room has been updated'});
});

/* DELETE */
router.delete('/rooms', function(req, res, next) {
    res.json({message: 'Your room has been deleted'});
});
  

module.exports = router;
