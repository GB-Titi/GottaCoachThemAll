module.exports = (app) => {
    const coaches = require("../controllers/coach.controller.js");
    var router = require("express").Router();

    router.post("/", coaches.create);
    // router.get("/", coaches.findAll);

    // Retrieve a single coach with id
    // router.get("/:id", coaches.findAll);

    // router.get("/:id", coaches.findAllByUser);

    // router.get("/:id", coaches.findAllByCoach);

    // // // Update a coach with id
    // // router.put("/:id", coaches.update);

    // // Delete a coach with id
    // router.delete("/:id", coaches.delete);

    app.use("/api/coaches", router);
};
