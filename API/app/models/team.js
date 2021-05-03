const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom_team: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "nom_team"
    },
    image_team: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "image_team"
    }
  }, {
    sequelize,
    tableName: 'team',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "nom_team",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nom_team" },
        ]
      },
      {
        name: "image_team",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "image_team" },
        ]
      },
    ]
  });
};
