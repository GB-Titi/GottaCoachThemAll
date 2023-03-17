module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define("reservation", {
      horaire: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
    });
  
    return Reservation;
  };