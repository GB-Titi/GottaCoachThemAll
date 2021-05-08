module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      nomRole: {
        type: Sequelize.STRING
      }

    });
  
    return Role;
  };