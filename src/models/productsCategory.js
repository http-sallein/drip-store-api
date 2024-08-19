// models/productCategory.js
import { DataTypes } from 'sequelize';
import { context } from './../config/context.js';

export const ProductCategory = context.define('ProductCategory', {

    product_id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'product', key: 'id' },
    },

    category_id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'category', key: 'id' },
    },

}, { tableName: 'product_category', timestamps: false });

