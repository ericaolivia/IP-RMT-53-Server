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
      Recipe.hasMany(models.Favorite, { foreignKey: 'RecipeId' });
      Recipe.belongsToMany(models.Tag, { through: models.RecipeTag, foreignKey: 'RecipeId' });
    }
  }
  Recipe.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: 'Title is required'
        },
        notEmpty:{
          msg: 'Title is required'
        }
      }

    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Description is required'
        },
        notEmpty:{
          msg: 'Description is required'
        }
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:{
          msg:'Instructions are required'
        },
        notEmpty:{
          msg: 'Instructions are required'
        }
      }
    },
    nutrition: {
      type: DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:{
          msg:'Nutrition is required'
        },
        notEmpty:{
          msg:'Nutrition is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};