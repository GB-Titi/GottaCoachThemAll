module.exports = (sequelize, Sequelize) => 
{
    const Coach = sequelize.define("coach",
    {
        niveau:
        {
            type:Sequelize.STRING
        },
        description:
        {
            type:Sequelize.TEXT
        },
        banniere_profil:
        {
            type:Sequelize.STRING
        },
        achievements:
        {
            type:Sequelize.TEXT
        }

    });
    return Coach
}