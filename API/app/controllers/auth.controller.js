const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Role = db.roles;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    pseudo: req.body.pseudo,
    mail: req.body.mail,
    mdp: bcrypt.hashSync(req.body.mdp, 8)
})
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            nom: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      pseudo: req.body.pseudo
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var mdpIsValid = bcrypt.compareSync(
        req.body.mdp,
        user.mdp
      );

      if (!mdpIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid mdp!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].nom.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          pseudo: user.pseudo,
          mail: user.mail,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};



