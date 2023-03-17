module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
        nom: {
        type: Sequelize.STRING
      }

    });
  
    return Role;
  };