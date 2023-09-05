module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT('long')
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    point_cles: {
      type: Sequelize.TEXT('long')
    }
  });

  return Tutorial;
};
