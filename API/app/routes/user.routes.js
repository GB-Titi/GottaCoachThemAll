const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};



// module.exports = (app) => {
//     const users = require("../controllers/user.controller.js");
//     var router = require("express").Router();

//     router.post("/", users.create);
//     router.get("/", users.findAll);

//     // Retrieve a single Tutorial with id
//     router.get("/:id", users.findOne);

//     // Update a Tutorial with id
//     router.put("/:id", users.update);

//     // Delete a Tutorial with id
//     router.delete("/:id", users.delete);

//     app.use("/api/users", router);
// };

