const db = require("../models");
const User = db.users;
const Coach = db.coaches;
const Reservation = db.reservations;

const Op = db.Sequelize.Op;

//Crée et sauvegarde un nouvel 
exports.create = (req, res) => {

    const reservation =
    {
        horaire: req.body.horaire,
        description: req.body.description,
        user_id: req.body.user_id,
        coach_id: req.body.coach_id
    };

    return Reservation
        .create(reservation)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log("Error while creating reservation");
        }
        )

}

exports.findAll = (req, res) => {

}

// exports.findAllByUser = (req, res) => {

// }

// exports.findAllByCoach = (req, res) => {

// }

// exports.delete = (req, res) => {

// }
