const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const Role = db.roles;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.mail) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a User
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        pseudo: req.body.pseudo,
        mail: req.body.mail,
        mdp: bcrypt.hashSync(req.body.mdp, 8)
        
    };
    console.log(user.firstname);
    // Save User in the database
    User.create(user)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Users.",
            });
        });
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    const pseudo = req.query.pseudo;
    var condition = pseudo ? { pseudo: { [Op.like]: `%${pseudo}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving games."
            });
        });
};

// Find a one User with its id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Users with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });

};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.coachBoard = (req, res) => {
    res.status(200).send("coach Content.");
  };