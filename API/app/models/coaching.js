const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coaching', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_coach: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'coachs',
        key: 'id'
      },
      unique: "coaching_ibfk_1"
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description_coaching: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "description_coaching"
    },
    disponibilite: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: "disponibilite"
    }
  }, {
    sequelize,
    tableName: 'coaching',
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
        name: "id_coach",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_coach" },
        ]
      },
      {
        name: "description_coaching",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "description_coaching" },
        ]
      },
      {
        name: "disponibilite",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "disponibilite" },
        ]
      },
    ]
  });
};
