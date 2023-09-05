const { verifyRegister } = require("../middlewares");
const { authJwt } = require("../middlewares");

module.exports = app => {
    const jeux = require("../controllers/jeu.controller.js");

    var router = require("express").Router();

    router.post("/", jeux.create);

    router.get("/", jeux.findAll);

    router.get("/:id", jeux.findOne);

    router.put("/:id", jeux.update);

    router.delete("/:id", jeux.delete);

    app.use('/api/jeu', router);

}