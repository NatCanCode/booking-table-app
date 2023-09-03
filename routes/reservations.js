const express = require('express');
const router = express.Router();
const { Reservation } = require("../db.js");

// sequelize model:generate --name Reservation --attributes number_of_customers:integer,reservation_date:date,reservation_name:string,reservation_note:string,reservation_status:integer
// Then delete test attibute in migration file

/* Reservations */
/* GET */
router.get('/reservations', function(req, res, next) {
    res.json(
      { message: {
        "reservations": [
        {
          id: 1,
          number_of_customers: 7,
          reservation_date: '2021-01-01',
          reservation_name: 'Doe family',
          reservation_note: 'Nothing specific',
          reservation_status: 1,
          spot: 1
      }]
      }
    }
    )
  });

  /* POST */
  router.post('/reservations', function(req, res, next) {
    const {id_user, id_spot, id_room, number_of_customers, reservation_date, reservation_name, reservation_note, reservation_status } = req.body;
    console.log(req.body);
  
    if (!reservation_name) {
      res.status(422).json({error: "reservation_name: Please enter a reservation name."});
    }
  
    if (typeof number_of_customers !== 'number' || !Number.isInteger(number_of_customers)) {
      res.status(422).json({error: "number_of_customers: Please enter an integer."});
    }
  
    if (!reservation_note) {}
  
    if (!reservation_date) {
      res.status(422).json({error: "reservation_date: Please enter a booking date."});
    }
  
    if (!id_spot && !id_room) {
      res.status(422).json({message:"id_spot && id_room: Please select enther a table or a room."});
    }
  
    // Save info you enter into Postman into the database
    const r1 = Reservation.build({
      id_user: id_user,
      number_of_customers: number_of_customers,
      reservation_date: reservation_date,
      reservation_name: reservation_name,
      reservation_note: reservation_note,
      reservation_status: reservation_status,
    });
    
    r1.save().then(
      () => console.log("Booking confirmed")
    );
  
    res.json({message: 'Your booking is confirmed.'});
  });
  
  /* PUT */
  router.put('/reservations', function(req, res, next) {
    res.json({message: 'Your booking has been updated'});
  });
  
  /* DELETE */
  router.delete('/reservations', function(req, res, next) {
    res.json({message: 'Your booking has been cancelled'});
  });


module.exports = router;
