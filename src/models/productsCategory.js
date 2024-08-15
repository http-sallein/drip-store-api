import { DataTypes } from "sequelize";
import { context } from './../config/context.js';

export const ProductCategory = context.define('ProductCategory', {

    product_id: {

        type: DataTypes.INTEGER,
        allowNull: false,
    },

    category_id: {
       
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'product_category', 
    timestamps: false,
});
