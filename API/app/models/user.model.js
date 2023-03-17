module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    pseudo: {
        type: Sequelize.STRING
    },
    mail: {
        type: Sequelize.STRING
    },
    mdp: {
        type: Sequelize.STRING
    },
    image_profil: {
        type: Sequelize.STRING
    },
    });

    return User;
};