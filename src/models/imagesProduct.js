import { DataTypes } from 'sequelize';
import { context } from './../config/context.js';

export const ImagesProduct = context.define('ImagesProduct', {

    enable: { type: DataTypes.BOOLEAN, defaultValue: 0 },

    product_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Product', key: 'id' }, // Chave estrangeira referenciando `Product`
    },

    path: { type: DataTypes.STRING, allowNull: false },
}, { tableName: 'images_product', timestamps: false });
