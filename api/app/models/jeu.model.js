module.exports = (sequelize, Sequelize) => {
    const Jeu = sequelize.define("jeux", {
      jeu: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    });
  
    return Jeu;
  };