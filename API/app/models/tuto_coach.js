const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tuto_coach', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_jeu: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_coach: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'coachs',
        key: 'id'
      }
    },
    points_clefs: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descritpion_tuto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lien_tuto: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "lien_tuto"
    }
  }, {
    sequelize,
    tableName: 'tuto_coach',
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
        name: "lien_tuto",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lien_tuto" },
        ]
      },
      {
        name: "id_coach",
        using: "BTREE",
        fields: [
          { name: "id_coach" },
        ]
      },
    ]
  });
};
