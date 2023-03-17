module.exports = (sequelize, Sequelize) => {
    const Coaching = sequelize.define("coaching", {
      image: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      disponibilite: {
        type: Sequelize.DATE
      },
    });
  
    return Coaching;
  };