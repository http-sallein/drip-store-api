import { DataTypes } from "sequelize";

import { context } from './../config/context.js';
import { ProductCategory } from "./productsCategory.js";

export const Category = context.define('Category', {

    name: {

        type: DataTypes.STRING, 
        allowNull: false,   
    },

    slug: {

        type: DataTypes.STRING,
        allowNull: false,
    },

    use_in_menu: {

        type: DataTypes.BOOLEAN,
        defaultValue: 0, 
    },

}, { tableName: 'category', timestamps: false, });

Category.hasOne(ProductCategory, { foreignKey: 'category_id' });