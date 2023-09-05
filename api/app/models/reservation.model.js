module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define("reservation", {
    horaire: {
      type: Sequelize.DATE,
    },
    date: {
      type: Sequelize.DATE,
    },
    duree: {
      type: Sequelize.INTEGER,
    },
    commentaire: {
      type: Sequelize.STRING,
    },
  });
  return Reservation;
};
