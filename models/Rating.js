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
    // account_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "BetaTaster",
    //     key: "id",
    //   },
    // },
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "food",
    //     key: "id",
    //   },
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
