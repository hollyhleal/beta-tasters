const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Food extends Model {}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    management_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Management",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Food",
  }
);

module.exports = Food;
