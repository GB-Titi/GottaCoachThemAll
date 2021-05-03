module.exports = (app) => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();

    router.post("/", users.create);
    router.get("/", users.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);

    // Update a Tutorial with id
    router.put("/:id", users.update);

    // Delete a Tutorial with id
    router.delete("/:id", users.delete);

    app.use("/api/users", router);
};
