module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define("team", {
      nomTeam: {
        type: Sequelize.STRING
      },
      image_team: {
        type: Sequelize.STRING
      }
    });
  
    return Team;
  };