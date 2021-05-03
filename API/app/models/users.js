const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pseudo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "pseudo"
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "mail"
    },
    mdp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    image_profil: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "image_profil"
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "pseudo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pseudo" },
        ]
      },
      {
        name: "mail",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
      {
        name: "image_profil",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "image_profil" },
        ]
      },
      {
        name: "id_role",
        using: "BTREE",
        fields: [
          { name: "id_role" },
        ]
      },
    ]
  });
};
