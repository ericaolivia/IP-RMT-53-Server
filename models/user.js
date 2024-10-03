'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Favorite, { foreignKey: 'UserId' });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Name is required'
        },
        notEmpty:{
          msg: 'Name is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:{
        args: true,
        msg: 'Email must be unique'
      },
      validate:{
        notNull:{
          msg: 'Email is required'
        },
        notEmpty:{
          msg: 'Email is required'
        },
        isEmail:{
          msg: 'Must be email form'
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'Password is required'
        },
        notEmpty:{
          msg: 'Password is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg',
      validate:{
        notNull:{
          msg: 'Image is required'
        },
        notEmpty:{
          msg: 'Image is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {
    try{
      var salt = bcrypt.genSaltSync(10);
      user.password = await bcrypt.hash(user.password, salt);
    } catch (err){
      throw new Error("Error hashing the password")
    }
  }) 
  return User;
};