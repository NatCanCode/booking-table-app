const express = require('express');
const router = express.Router();
const { User } = require("../db.js");

// sequelize model:generate --name User --attributes user_role:string,firstname:string,lastname:string,email:string,phone:string,user_password:string
// Then delete test attibute in migration file

/* Users */
/* GET */
router.get('/users', function(req, res, next) {
    res.json({
      message: {email: 'alex@mail.com', firstname: 'Alex', lastname: 'Zerah',}
    });
});

/* POST */
router.post('/users', function(req, res, next) {
    res.json({message: 'Your account has been created'});
});

/* PUT */
router.put('/users', function(req, res, next) {
    res.json({message: 'Your account has been updated'});
});

/* DELETE */
router.delete('/users', function(req, res, next) {
    res.json({message: 'Your account has been deleted'});
});
  

module.exports = router;
