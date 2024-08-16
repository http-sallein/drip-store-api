
import { DataTypes } from 'sequelize';
import sequelize from '../connection/database.js';

const Brand = sequelize.define('Brand', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW
  }
}, {
  tableName: 'tb_brands',
  timestamps: false
});

export default Brand;
