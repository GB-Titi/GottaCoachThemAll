module.exports = (sequelize, Sequelize) => {
    const Tuto_coach = sequelize.define("tuto_coach", {
      nom: {
        type: Sequelize.STRING
      },
      point_clefs: {
        type: Sequelize.STRING
      },
      desciption_tuto: {
        type: Sequelize.STRING
      },
      lien_tuto: {
        type: Sequelize.STRING
      },
    });
  
    return Tuto_coach;
  };