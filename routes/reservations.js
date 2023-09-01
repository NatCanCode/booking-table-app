const express = require('express');
const router = express.Router();
const { Reservation } = require("../db.js");

// sequelize model:generate --name Reservation --attributes number_of_customers:integer,reservation_date:date,reservation_name:string,reservation_note:string,reservation_status:integer

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
  
  // /* POST */
  // router.post('/reservations', function(req, res, next) {
  //   // Logique:
  //   // userId
  //   const userId = req.body.userId;
  //   console.log(userId);
  //   if (userId && typeof userId !== 'number' || !Number.isInteger(userId)) {
  //     res.status(422).json({error: "userId: Integer only."})
  //   }
  
  //   // tableId = optional
  //   const tableId = req.body.tableId;
  //   console.log(tableId);
  //   if (typeof tableId !== 'number' || !Number.isInteger(tableId)) {
  //     res.status(422).json({error: "tableId: Integer only."})
  //   }
  
  //   // roomId = optional
  //   const roomId = req.body.roomId
  //   console.log(roomId);
  //   if (typeof roomId !== 'number' || !Number.isInteger(roomId)) {
  //     res.status(422).json({error: "roomId: Integer only."})
  //   }
  
  //   // bookingName
  //   const bookingName = req.body.bookingName
  //   console.log(bookingName);
  //   if (typeof bookingName !== 'string') {
  //     res.status(422).json({error: "bookingName: String only."})
  //   }
  
  //   // numberOfGuests
  //   const numberOfCustomers = req.body.numberOfCustomers;
  //   console.log(numberOfCustomers);
  //   if (typeof numberOfCustomers !== 'number' || !Number.isInteger(numberOfCustomers)) {
  //     res.status(422).json({error: "numberOfCustomers: Integer only. Please enter a number of guests."})
  //   }
  
  //   // bookingDate + regx (string 1-2; sting /; int 1-9)
  //   const bookingDate = req.body.bookingDate
  //   console.log(bookingDate);
  //   if (typeof bookingDate !== 'string') {
  //     res.status(422).json({error: "bookingDate: Date format only."})
  //   }
  
  //   // bookingNote optional
  //   const bookingNote = req.body.bookingNote
  //   console.log(bookingNote);
  //   if (typeof bookingNote !== 'string') {
  //     res.status(422).json({error : "bookingNote: String only."})
  //   }
  
  //   // bookingstatus
  //   const bookingStatus = req.body.bookingStatus
  //   console.log(bookingStatus);
  //   if (typeof bookingStatus !== 'number') {
  //     res.status(422).json({error: "bookingStatus: Integer only."})
  //   }
  
  //   // Save info you enter into Postman in the database
  //   const r1 = Reservation.build({
  //     number_of_customers: 3,
  //     reservation_date: '2024-01-01',
  //     reservation_name: 'Alexandre',
  //     reservation_note: 'Vue sur la mer',
  //     reservation_status: 1,
  //   });
    
  //   r1.save().then(
  //     () => console.log("Réservation enregistrée")
  //   );
  
  //   // req.body.number_of_customers
  //   res.json({ Message: "Booking confirmed" });
  // });
  
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
  
  // /* PUT */
  // router.put('/reservations', function(req, rs, next) {
  //   res.json({message: "Your booking has been canceled."})
  // })
  
  
  // /* DELETE */
  // router.delete('/reservations', function(req, rs, next) {
  //   res.json({massage: "Your booking has been canceled."})
  // })
  
  // /* Users */
  // /* GET */
  // router.get('/users', function(req, res, next) {
  //   res.json(
  //     { "users": [
  //       {
  //         id: 1,
  //         user_role: 1,
  //         firstname: 'Nora',
  //         lastname: 'Aloah',
  //         email: 'noraamoah@gmail.com',
  //         password: 'Forget*'
  //     }]
  //     }
  //   )
  // });
  
  // /* POST */
  // router.post('/users', function(req, res, next) {
  //   const {user_role, firstname, lastname, email, phone, user_password } = req.body;
  //   console.log(req.body);
  
  //   if (!user_role) {
  //     res.status(422).json({error: "user_role: Please enter a user role."});
  //   }
  
  //   if (typeof number_of_customers !== 'number' || !Number.isInteger(number_of_customers)) {
  //     res.status(422).json({error: "number_of_customers: Please enter an integer."});
  //   }
  
  //   if (!reservation_note) {}
  
  //   if (!reservation_date) {
  //     res.status(422).json({error: "reservation_date: Please enter a booking date."});
  //   }
  
  //   if (!id_spot && !id_room) {
  //     res.status(422).json({message:"id_spot && id_room: Please select enther a table or a room."});
  //   }
  
  //   // Save info you enter into Postman into the database
  //   const r1 = Reservation.build({
  //     id_user: id_user,
  //     number_of_customers: number_of_customers,
  //     reservation_date: reservation_date,
  //     reservation_name: reservation_name,
  //     reservation_note: reservation_note,
  //     reservation_status: reservation_status,
  //   });
    
  //   r1.save().then(
  //     () => console.log("Booking confirmed")
  //   );
  
  //   res.json({message: 'Your booking is confirmed.'});
  // });
  
  // /* PUT */
  
  // /* DELETE */
  
  
  // /* Spots == Tables */
  // /* GET */
  // router.get('/spots', function(req, res, next) {
  //   res.json(
  //     { "spots": [
  //       {
  //         id: 1
  //     }]
  //     }
  //   )
  // });
  
  // /* POST */
  // /* PUT */
  // /* DELETE */
  
  
  // /* Rooms */
  // /* GET */
  // router.get('/rooms', function(req, res, next) {
  //   res.json(
  //     { "rooms": [
  //       {
  //         id: 1
  //     }]
  //     }
  //   )
  // });
  
  // /* POST */
  // /* PUT */
  // /* DELETE */
  
  
  router.put('/reservations', function(req, res, next) {
    res.json({message: 'Your booking has been updated'});
  });
  
  router.delete('/reservations', function(req, res, next) {
    res.json({message: 'Your booking has been cancelled'});
  });


module.exports = router;