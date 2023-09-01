const express = require('express');
const router = express.Router();
const { Spot } = require("../db.js");

// sequelize model:generate --name Spot --attributes test:string
// Then delete test attibute in migration file

  /* /spots */
  router.get('/spots', function(req, res, next) {
    res.json({
      message: {id: 1}
    })
  });
  
  router.post('/spots', function(req, res, next) {
    res.json({message: 'Your table has been created'});
  });
  
  router.put('/spots', function(req, res, next) {
    res.json({message: 'Your table has been updated'});
  });
  
  router.delete('/spots', function(req, res, next) {
    res.json({message: 'Your table has been deleted'});
  }
  );


module.exports = router;