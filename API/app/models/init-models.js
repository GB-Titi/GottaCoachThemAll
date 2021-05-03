var DataTypes = require("sequelize").DataTypes;
var _coaching = require("./coaching");
var _coachs = require("./coachs");
var _jeux = require("./jeux");
var _reservations = require("./reservations");
var _roles = require("./roles");
var _team = require("./team");
var _tuto_coach = require("./tuto_coach");
var _users = require("./users");

function initModels(sequelize) {
  var coaching = _coaching(sequelize, DataTypes);
  var coachs = _coachs(sequelize, DataTypes);
  var jeux = _jeux(sequelize, DataTypes);
  var reservations = _reservations(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var team = _team(sequelize, DataTypes);
  var tuto_coach = _tuto_coach(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  coaching.belongsTo(coachs, { as: "id_coach_coach", foreignKey: "id_coach"});
  coachs.hasOne(coaching, { as: "coaching", foreignKey: "id_coach"});
  reservations.belongsTo(coachs, { as: "coach", foreignKey: "coach_id"});
  coachs.hasOne(reservations, { as: "reservation", foreignKey: "coach_id"});
  tuto_coach.belongsTo(coachs, { as: "id_coach_coach", foreignKey: "id_coach"});
  coachs.hasMany(tuto_coach, { as: "tuto_coaches", foreignKey: "id_coach"});
  coachs.belongsTo(jeux, { as: "id_jeu_jeux", foreignKey: "id_jeu"});
  jeux.hasMany(coachs, { as: "coaches", foreignKey: "id_jeu"});
  users.belongsTo(roles, { as: "id_role_role", foreignKey: "id_role"});
  roles.hasMany(users, { as: "users", foreignKey: "id_role"});
  coachs.belongsTo(team, { as: "id_team_team", foreignKey: "id_team"});
  team.hasMany(coachs, { as: "coaches", foreignKey: "id_team"});
  coachs.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(coachs, { as: "coaches", foreignKey: "id_user"});
  reservations.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasOne(reservations, { as: "reservation", foreignKey: "user_id"});

  return {
    coaching,
    coachs,
    jeux,
    reservations,
    roles,
    team,
    tuto_coach,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
