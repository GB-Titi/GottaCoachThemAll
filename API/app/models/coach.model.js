module.exports = (sequelize, DataTypes) => 
{
    const Coach = sequelize.define("coach",
    {
        niveau:
        {
            type:DataTypes.STRING
        },
        description:
        {
            type:DataTypes.STRING
        },
        banniere_profil:
        {
            type:DataTypes.STRING
        },
        achievements:
        {
            type:DataTypes.STRING
        }

    });
    return Coach
}