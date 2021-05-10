const db = require("../models");
const coach = db.coachs;
const user = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => 
{
    const coach = 
    {
        niveau:req.body.niveau, 
        description:req.body.description, 
        banniere_profil:req.body.banniere_profil, 
        achievements:req.body.achievements
    }; 

    Coach.create(coach)
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

// Find one Coach by its id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Coach.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Coaches with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Coach.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Coach was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Coach with id=${id}. Maybe Coach was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Coach with id=" + id
            });
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Coach.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Coach was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Coach with id=${id}. Maybe Coach was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Coach with id=" + id
            });
        });
};
