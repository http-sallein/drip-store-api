import { DataTypes } from 'sequelize';

import { context } from './../config/context.js';
import { ShapeEnum, TypeEnum } from '../enums/optionsProductEnum.js';

export const OptionsProduct = context.define('OptionsProduct', {

    product_id: {

        type: DataTypes.INTEGER,
        allowNull: false,
    },

    title: {

        type: DataTypes.STRING,
        allowNull: false,
    },

    shape: {

        type: DataTypes.ENUM,
        defaultValue: 'square',
        values: Object.values(ShapeEnum),
    },
    
    radius: {

        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    type: {

        type: DataTypes.ENUM,
        defaultValue: 'text',
        values: Object.values(TypeEnum),
    },

    values: {

        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    tableName: 'options_product', 
    timestamps: false,
});
