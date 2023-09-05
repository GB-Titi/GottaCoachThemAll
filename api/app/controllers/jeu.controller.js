const db = require("../models");
const Jeu = db.jeu;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.jeu) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const jeu = {
    jeu: req.body.jeu,
    description: req.body.description,
  };

  Jeu.create(jeu)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erreur lors de la création du jeu",
      });
    });
};

exports.findAll = (req, res) => {
  const jeu = req.query.jeu;
  var condition = jeu ? { jeu: { [Op.like]: `%${jeu}%` } } : null;

  Jeu.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erreur lors de la récupération des jeux",
      });
    });
};


exports.findOne = (req, res) => {

    const id = req.params.id;
    
    Jeu.findByPk(id)
        .then((data) => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
            message: "Jeu non trouvé",
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: "Erreur lors de la récupération du jeu",
        });
        });
    };

exports.update = (req, res) => {
    
    const id = req.params.id;
    
    Jeu.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
        if (num == 1) {
            res.send({
            message: "Jeu modifié",
            });
        } else {
            res.send({
            message: `Impossible de modifier le jeu avec l'id=${id}.`,
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: "Erreur lors de la modification du jeu",
        });
        });
    };

exports.delete = (req, res) => {

    const id = req.params.id;
    
    Jeu.destroy({
        where: { id: id },
    })
        .then((num) => {
        if (num == 1) {
            res.send({
            message: "Jeu supprimé",
            });
        } else {
            res.send({
            message: `Impossible de supprimer le jeu avec l'id=${id}.`,
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: "Erreur lors de la suppression du jeu",
        });
        });
    }
