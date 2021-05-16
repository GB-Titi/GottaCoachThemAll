module.exports = (app) => {
    const jeux = require("../controllers/jeux.controller.js");
    var router = require("express").Router();

    // Create a gave 
    router.post("/", jeux.create);
    
    //Retreive all games in database
    router.get("/", jeux.findAll);

    // Retrieve a single game with id
    router.get("/:id", jeux.findOne);

    // Update a game with id
    router.put("/:id", jeux.update);

    // Delete a game with id
    router.delete("/:id", jeux.delete);

    //Give a prefix to all previously defined routes
    app.use("/api/jeux", router);
};
