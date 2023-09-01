const express = require('express');
const router = express.Router();
const { Room } = require("../db.js");

// sequelize model:generate --name Room --attributes test:string
// Then delete test attibute in migration file
  /* /rooms */
  router.get('/rooms', function(req, res, next) {
    res.json({
      message: {id: 1}
    })
  });
  
  router.post('/rooms', function(req, res, next) {
    res.json({message: 'Your room has been created'});
  });
  
  router.put('/rooms', function(req, res, next) {
    res.json({message: 'Your room has been updated'});
  });
  
  router.delete('/rooms', function(req, res, next) {
    res.json({message: 'Your room has been deleted'});
  });
  

module.exports = router;