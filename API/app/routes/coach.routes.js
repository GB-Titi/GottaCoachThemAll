module.exports = (app) => {
    const coaches = require("../controllers/coach.controller.js");
    var router = require("express").Router();

    router.post("/", coaches.create);
    // router.get("/", coaches.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", coaches.findOne);

    // Update a Tutorial with id
    router.put("/:id", coaches.update);

    // Delete a Tutorial with id
    router.delete("/:id", coaches.delete);

    app.use("/api/coaches", router);
};
