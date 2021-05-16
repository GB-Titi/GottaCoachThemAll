module.exports = (app) => {
    const reservations = require("../controllers/reservation.controller");
    var router = require("express").Router();

    router.post("/", reservations.create);
    
    // router.get("/", reservations.findAll);

    // // Retrieve a single coach with id
    // router.get("/:id", reservations.findAllByUser);

    // // Update a coach with id
    // router.put("/:id", reservations.update);

    // // Delete a coach with id
    // router.delete("/:id", reservations.delete);

    app.use("/api/reservations", router);
};
