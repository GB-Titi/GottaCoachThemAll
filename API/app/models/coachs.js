const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coachs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id_jeu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jeux',
        key: 'id'
      }
    },
    niveau: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'team',
        key: 'id'
      }
    },
    baniere_profil: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "baniere_profil"
    },
    achievements: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'coachs',
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
        name: "baniere_profil",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "baniere_profil" },
        ]
      },
      {
        name: "id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "id_jeu",
        using: "BTREE",
        fields: [
          { name: "id_jeu" },
        ]
      },
      {
        name: "id_team",
        using: "BTREE",
        fields: [
          { name: "id_team" },
        ]
      },
    ]
  });
};
