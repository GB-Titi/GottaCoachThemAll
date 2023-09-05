module.exports = (sequelize, Sequelize) => 
{
    const CoachingSession = sequelize.define("CoachingSession",
    {
        description : 
        {
            type:Sequelize.STRING
        },
        disponibilite :
        {
            type:Sequelize.DATE
        },
        image:{
            type:Sequelize.STRING
        }
    });
    return CoachingSession
}