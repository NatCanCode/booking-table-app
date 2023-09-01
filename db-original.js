// Import Sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Connect PostgreSQL config
const sequelize = new Sequelize('postgres://nn@127.0.0.1:5432/postgres')
console.log(1)

// Check connection
try {
    console.log(3)
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    })
} catch (error) {
    console.error('Unable to connect to the database:', error);
};
console.log(2)

// Model
const Reservation = sequelize.define('Reservation', {
  // Model attributes are defined here
  number_of_customers: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reservation_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  reservation_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  reservation_note: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  reservation_status: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  // Other model options go here
});

const Spot = sequelize.define('Spot', {

});

const Room = sequelize.define('Room', {

});

const User = sequelize.define('User', {
    user_role: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
});

// `sequelize.define` also returns the model
console.log(Reservation === sequelize.models.Reservation); // true

// Reservation.sync({ force: true }).then(() => {
//   console.log("The table for the Reservation model was just (re)created!")
// });

// Spot.sync({ force: true }).then(() => {
//   console.log("The table for the Spot model was just (re)created!")
// });

// Room.sync({ force: true }).then(() => {
//   console.log("The table for the Room model was just (re)created!")
// });

// User.sync({ force: true }).then(() => {
//   console.log("The table for the User model was just (re)created!")
// });

/* Add reservations to the database */
const r1 = Reservation.build({
  number_of_customers: 3,
  reservation_date: "0224-01-09",
  reservation_name: "Anna",
  reservation_note: "By the seaside",
  reservation_status: 1,
});

r1.save().then(
  () => console.log("Booking confirmed.")
)

// module.exports = {
//   Reservation
// };
