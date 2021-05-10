const db = require("../models");
const Jeu = db.jeux;
const Op = db.Sequelize.Op;

exports.create= (req, res) =>
{
    // Validate request
    if (!req.body.mail) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const jeu = 
    {
        jeu:req.body.jeu,
        image:req.body.jeu,
        logo:req.body.jeu,
        description:req.body.jeu,

    };

    Jeu.create(jeu)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the game.",
        });
    });
}

exports.findAll = (req, res) => {
    const jeu = req.query.jeu;
    let condition = jeu ? { jeu: { [Op.like]: `%${jeu}%` } } : null;

    Jeu.findAll({ where: condition })
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

exports.update = (req, res) => {
    const id = req.params.id;

    Jeu.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Jeu was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Jeu with id=${id}. Maybe Jeu was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Jeu with id=" + id
            });
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Jeu.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Jeu was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Jeu with id=${id}. Maybe Jeu was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Jeu with id=" + id
            });
        });
};
