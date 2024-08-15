import { DataTypes } from "sequelize";

import { context } from './../config/context.js';
import { ImagesProduct } from "./imagesProduct.js";
import { ProductCategory } from "./productsCategory.js";

export const Product = context.define('Product', {

    enable: {

        type: DataTypes.BOOLEAN, 
        defaultValue: 0,
    },

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

    stock: {

        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    description: {

        type: DataTypes.STRING,
    },

    price: {

        type: DataTypes.FLOAT,
        allowNull: false,
    },

    price_with_discount: {

        type: DataTypes.FLOAT,
        allowNull: false,
    },

}, { tableName: 'product', timestamps: false, });


Product.hasMany(ImagesProduct);
Product.hasOne(ProductCategory, { foreignKey: 'product_id' });