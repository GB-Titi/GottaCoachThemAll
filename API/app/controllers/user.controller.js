const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.mail) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Users
  const user = {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    pseudo : req.body.pseudo,
    mail : req.body.mail,
    mdp : req.body.mdp
  };
  console.log(user.firstname);
  // Save Users in the database
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

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const pseudo = req.query.pseudo;
  var condition = pseudo ? { pseudo: { [Op.like]: `%${pseudo}%` } } : null;

  Users.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {};

// Update a User by the id in the request
exports.update = (req, res) => {};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};

// Find all published Users
exports.findAllPublished = (req, res) => {};
