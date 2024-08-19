import { Op } from 'sequelize';

import { Category } from '../models/category.js';
import { ImagesProduct } from '../models/imagesProduct.js';
import { ProductCategory } from '../models/productsCategory.js';
import { Product } from './../models/product.js';

export const getAllProducts = async (req, res) => {
  try {
    
    const {
      limit = 12,
      page = 1,
      category_ids,
      price_range
    } = req.query;

    const whereConditions = {};

    const limitValue = parseInt(limit, 10) === -1 ? null : parseInt(limit, 10);
    const offsetValue = limitValue ? (parseInt(page, 10) - 1) * limitValue : 0;

    if (price_range) {
      const [minPrice, maxPrice] = price_range.split('-').map(price => parseFloat(price));
      whereConditions.price = { [Op.between]: [minPrice, maxPrice] };
    }

    if (category_ids) {
      
      const ids = category_ids.split(',').map(id => parseInt(id, 10));
  
      const productIds = await ProductCategory.findAll({
        attributes: ['product_id'],
        where: { category_id: ids }
      }).then(results => results.map(r => r.product_id));
  
      whereConditions[Op.and] = [
        {
          id: { [Op.in]: productIds }
        }
      ];
    }

    const products = await Product.findAll({
      include: [
        {
          model: ImagesProduct,
          as: 'images',
          attributes: ['id', 'path', 'enable'],
        },

        {
          model: ProductCategory,
          as: 'productCategories',
          attributes: ['category_id'],
          include: [
            {
              model: Category,
              as: 'category',
              attributes: ['id'],
            },
          ],
        },

      ].filter(Boolean),
      where: whereConditions,
      limit: limitValue,
      offset: offsetValue,
      attributes: {
        exclude: ['product_id'],
      },
    });

    const formattedProducts = products.map(product => {
      const categoryIds = product.productCategories?.map(pc => pc.category?.id) || [];
    
      const images = product.images?.map(image => ({
        id: image.id,
        content: image.path,
      })) || [];
    
      return {
        id: product.id,
        enabled: product.enable,
        name: product.name,
        slug: product.slug,
        stock: product.stock,
        description: product.description,
        price: product.price,
        price_with_discount: product.price_with_discount,
        category_ids: categoryIds,
        images: images,
      };
    });

    res.status(200).json({ data: formattedProducts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getProductById = async (req, res) => {

  try {

    const { id } = req.params;
    const product = await Product.findByPk(id, {

      include: [
        {
          model: ImagesProduct,
          as: 'images', 
          attributes: ['id', 'path', 'enable'],
        },
        {
          model: ProductCategory,
          as: 'productCategories',
          attributes: ['category_id'],
          include: [
            {
              model: Category,
              as: 'category',
              attributes: ['id'],
            },
          ],
        },
      ],
      attributes: {
        exclude: ['product_id'],
      },
    });

    if(product){

      const formattedProduct = {
        id: product.id,
        enabled: product.enable,
        name: product.name,
        slug: product.slug,
        stock: product.stock,
        description: product.description,
        price: product.price,
        price_with_discount: product.price_with_discount,
        category_ids: product.productCategories?.map(pc => pc.category?.id) || [],
        images: product.images?.map(image => ({
          id: image.id,
          content: image.path,
        })) || [],
      };

      res.status(200).json(formattedProduct);
    }
    
    else 
      res.status(404).json({ message: "produto não encontrado" })
    ;
  }

  catch(error) { res.status(500).json({ error: error.message }) }
}

export const createProduct = async (req, res) => {
  try {
    const { images, category_ids, ...productData } = req.body;

    const categories = await Category.findAll({
      where: {
        id: category_ids
      }
    });

    if (categories.length !== category_ids.length) {
      return res.status(401).json({ error: 'Uma ou mais categorias não foram encontradas' });
    }

    const product = await Product.create(productData);

    const categoryAssociations = category_ids.map(categoryId => ({
      product_id: product.id,
      category_id: categoryId
    }));

    await ProductCategory.bulkCreate(categoryAssociations);

    const imagePromises = images.map(async (image) => {
      await ImagesProduct.create({ 
        product_id: product.id,
        path: image.content,
        enable: image.enable
      });
    });

    await Promise.all(imagePromises);

    const createdProduct = await Product.findOne({
      where: { id: product.id },
      include: [
        {
          model: ImagesProduct,
          as: 'images',
          attributes: ['id', 'path', 'enable'],
        },
        {
          model: ProductCategory,
          as: 'productCategories',
          attributes: ['category_id'],
          include: [
            {
              model: Category,
              as: 'category',
              attributes: ['id', 'name'],
            },
          ],
        },
      ],
      attributes: {
        exclude: ['product_id'],
      },
    });

    const formattedProduct = {
      id: createdProduct.id,
      enabled: createdProduct.enable,
      name: createdProduct.name,
      slug: createdProduct.slug,
      stock: createdProduct.stock,
      description: createdProduct.description,
      price: createdProduct.price,
      price_with_discount: createdProduct.price_with_discount,
      category_ids: createdProduct.productCategories?.map(pc => pc.category?.id) || [],
      images: createdProduct.images?.map(image => ({
        id: image.id,
        content: image.path,
      })) || [],
    };

    const category_ids_response = createdProduct.productCategories.map(pc => pc.category_id);

    res.status(201).json(
        formattedProduct
    );

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params; 
  const { images, category_ids, ...updatedData } = req.body; 

  try {

    const product = await Product.findByPk(id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if(req.body.category_ids) {

      const categories = await Category.findAll({
        where: {
          id: category_ids
        }
      });
  
      if (categories.length !== category_ids.length) {
        return res.status(401).json({ error: 'Uma ou mais categorias não foram encontradas' });
      }
    }

    await product.update(updatedData);

    if (images) {
      for (const image of images) {
        if (image.id) {
          await ImagesProduct.update(
            { path: image.content, enable: image.enable },
            { where: { id: image.id } }
          );
        } else {
          await ImagesProduct.create({
            product_id: id, 
            path: image.content,
            enable: image.enable
          });
        }
      }
    }

    if (category_ids) {
      await ProductCategory.destroy({
        where: { product_id: id }
      });

      for (const categoryId of category_ids) {
        await ProductCategory.create({
          product_id: id,
          category_id: categoryId
        });
      }
    }

    const updatedProduct = await Product.findOne({
      where: { id },
      include: [
        {
          model: ImagesProduct,
          as: 'images',
          attributes: ['id', 'path', 'enable'],
        },
        {
          model: ProductCategory,
          as: 'productCategories',
          attributes: ['category_id'],
          include: [
            {
              model: Category,
              as: 'category',
              attributes: ['id'],
            },
          ],
        },
      ],
      attributes: {
        exclude: ['product_id'],
      },
    });

    const formattedProduct = {
      id: updatedProduct.id,
      enabled: updatedProduct.enable,
      name: updatedProduct.name,
      slug: updatedProduct.slug,
      stock: updatedProduct.stock,
      description: updatedProduct.description,
      price: updatedProduct.price,
      price_with_discount: updatedProduct.price_with_discount,
      category_ids: updatedProduct.productCategories?.map(pc => pc.category?.id) || [],
      images: updatedProduct.images?.map(image => ({
        id: image.id,
        content: image.path,
      })) || [],
    };

    res.status(200).json({ data: formattedProduct });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {

    const { id } = req.params;
    const deleted = await Product.destroy({
        where: { id: id },
    });
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "product não encontrado" });
    }
  } catch (error) { res.status(500).json({ error: error.message }) }
}
  