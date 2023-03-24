const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Rating extends Model {}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   // references: {
    //   //   model: "BetaTaster",
    //   //   key: "id",
    //   // },
    // },
    // food_id: {
    //   type: DataTypes.INTEGER,
    //   // references: {
    //   //   model: "Food",
    //   //   key: "id",
    //   // },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "rating",
    timestamps: true,
  }
);

module.exports = Rating;
