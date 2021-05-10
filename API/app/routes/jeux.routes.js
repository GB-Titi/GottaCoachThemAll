module.exports = (app) => {
    const jeux = require("../controllers/jeux.controller.js");
    var router = require("express").Router();

    router.post("/", jeux.create);
    router.get("/", jeux.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", jeux.findOne);

    // Update a Tutorial with id
    router.put("/:id", jeux.update);

    // Delete a Tutorial with id
    router.delete("/:id", jeux.delete);

    app.use("/api/jeux", router);
};
