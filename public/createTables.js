import { context } from "../src/config/context.js";

import { Product } from '../src/models/product.js';
import { Category } from '../src/models/category.js';
import { ProductCategory } from '../src/models/productsCategory.js';
import { ImagesProduct } from '../src/models/imagesProduct.js';
import { OptionsProduct } from "../src/models/optionsProduct.js";

export async function createTables() {
  try {
    await context.authenticate();

    Product.hasMany(ImagesProduct, {
      foreignKey: 'product_id',
      as: 'images',
      onDelete: 'CASCADE',
    });

    ImagesProduct.belongsTo(Product, { foreignKey: 'product_id' });

    Product.hasMany(ProductCategory, {
      foreignKey: 'product_id',
      as: 'productCategories', 
      onDelete: 'CASCADE',
    });

    ProductCategory.belongsTo(Product, { foreignKey: 'product_id' });

    Category.hasMany(ProductCategory, {
      foreignKey: 'category_id',
      as: 'categories', 
      onDelete: 'CASCADE',
    });

    ProductCategory.belongsTo(Category, {
      foreignKey: 'category_id',
      as: 'category', 
    });

    await context.sync();
  } catch (error) {
    console.error('Erro ao sincronizar as tabelas:', error);
  }
}
  