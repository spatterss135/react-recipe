'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    save_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    summary:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    diets: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    spoonacularSourceUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    timestamps: false
  });
  return Recipe;
};