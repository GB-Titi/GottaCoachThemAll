const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.register = (req, res) => {
    // Save User to Database
    User.create({
        mdp: bcrypt.hashSync(req.body.mdp, 8),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        pseudo: req.body.pseudo,
        mail: req.body.mail,
    })
        .then((user) => {
            if (req.body.roles) {
                Role.findAll({
                    where: {
                        name: {
                            [Op.or]: req.body.roles,
                        },
                    },
                }).then((roles) => {
                    user.setRoles(roles).then(() => {
                        res.send({ message: "Inscription réussie!" });
                    });
                });
            } else {
                // user role = 1
                user.setRoles([1]).then(() => {
                    res.send({ message: "Inscription réussie!" });
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.login = (req, res) => {
    User.findOne({
        where: {
            mail: req.body.mail,
        },
    })
        .then((user) => {
            if (!user) {
                return res.status(404).send({ message: "Utilisateur non trouvé" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.mdp,
                user.mdp
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Mot de passe invalide!",
                });
            }

            const token = jwt.sign({ id: user.id }, config.secret, {
                algorithm: "HS256",
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });

            var authorities = [];
            user.getRoles().then((roles) => {
                for (let i = 0; i < roles.length; i++) {
                    authorities.push("ROLE_" + roles[i].name.toUpperCase());
                }
                res.status(200).send({
                    id: user.id,
                    pseudo: user.pseudo,
                    mail: user.mail,
                    roles: authorities,
                    accessToken: token,
                });
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};
