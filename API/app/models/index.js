const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const reservations = require("./seq-auto/reservations.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.coaches = require("./coach.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
db.coaching = require("./coaching.model.js")(sequelize,Sequelize);
db.jeux = require("./jeux.model.js")(sequelize,Sequelize);
db.reservations = require("./reservations.model.js")(sequelize,Sequelize);
db.teams = require("./team.model.js")(sequelize,Sequelize);
db.tuto_coaches = require("./tuto_coach.model.js")(sequelize,Sequelize);


db.users.hasOne(db.coaches, {});
db.coaches.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});
// db.roles.hasMany(db.users, { as: 'users '});
// db.users.belongsTo(db.roles, {
//   foreignKey: "roleId",
//   as: "role",
// });


db.roles.belongsToMany(db.users, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });
  db.users.belongsToMany(db.roles, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });
db.ROLES = ["user", "admin", "moderator"];


db.coaches.hasMany(db.coaching, {as : 'coaching'})
db.coaching.belongsTo(db.coaches, 
    {
        foreignKey : "coachId",
        as: 'coach'
    });

db.jeux.hasMany(db.coaches, {})
db.coaches.belongsTo(db.jeux, {
    foreignKey: "jeuxId",
    as: "jeux",
})

db.reservations.belongsTo(db.coaches, { as: "coaches", foreignKey: "coach_id"});
db.reservations.belongsTo(db.users, { as: "users", foreignKey: "user_id"});

db.teams.hasMany(db.coaches, { as: 'coach'});
db.coaches.belongsTo(db.teams, {
  foreignKey: "teamId",
  as: "team",
});



db.tuto_coaches.belongsTo(db.coaches, { as: "coaches", foreignKey: "coach_id"});
db.tuto_coaches.belongsTo(db.jeux, { as: "jeux", foreignKey: "jeux_id"});
module.exports = db;

