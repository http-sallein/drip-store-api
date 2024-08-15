// import bcrypt from 'bcrypt';


// export default (sequelize, DataTypes) => {
//   class User extends Model {
    
//     static associate(models) {
    
//     }
//   }

//   User.init({
//     full_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true, 
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       set(value) {
//         const saltRounds = 10;
//         const hash = bcrypt.hashSync(value, saltRounds);
//         this.setDataValue('password', hash);
//       },
//     }
//   }, {
//     sequelize,
//     modelName: 'User',
//   });

//   return User;
// };


import { DataTypes } from "sequelize";

import { context } from './../config/context.js';

export const User = context.define('User', {

    first_name: {

        type: DataTypes.STRING, 
        allowNull: false,   
    },

    sur_name: {

        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {

        type: DataTypes.STRING,
        allowNull: false,   
        unique: true,       
    },

    password: {

        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    tableName: 'user', 
    timestamps: true,   
});
