const dbConfig = require("../config/db.config.js");


const Sequelize = require("sequelize");

console.log(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,  dbConfig.HOST);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.coach = require("../models/coach.model.js")(sequelize, Sequelize);
db.jeu = require("../models/jeu.model.js")(sequelize, Sequelize);
db.coachingSession = require("../models/coachingSession.model.js")(sequelize, Sequelize);
db.reservation = require("../models/reservation.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});
db.coach.belongsTo(db.user)
db.coach.belongsTo(db.jeu)
db.tutorials.belongsTo(db.jeu)
db.coach.hasMany(db.coachingSession)
db.coach.hasMany(db.tutorials)
db.reservation.belongsTo(db.coach)
db.reservation.belongsTo(db.user)

db.ROLES = ["user", "admin", "coach"];

module.exports = db;
