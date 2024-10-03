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
    }
  }
  Recipe.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false, 
    },
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
    imageUrl:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'Image is required'
        },
        notEmpty:{
          msg:'Image is required'
        }
      }
    },
    tags:{
      type: DataTypes.STRING,
    },
    ingredients:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'Ingredients are required'
        },
        notEmpty:{
          msg:'Ingredients are required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};