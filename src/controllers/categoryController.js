
import { Category } from '../models/category.js';

export const getAllCategories = async (req, res) => {

  try {

    const categories = await Category.findAll();
    res.status(200).json({ data: categories });
  }

  catch (error) { res.status(400).json({ error: error.message }) }
}

export const getCategoryById = async (req, res) => {

  try {

    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (category) { res.status(200).json(category) }

    else { res.status(404).json({ message: "categoria não encontrada" }) }
  }

  catch (error) { res.status(500).json({ error: error }) }
}

export const createCategory = async (req, res) => {

  try {

    const category = await Category.create({

      name: req.body.name,
      slug: req.body.slug,
      use_in_menu: req.body.use_in_menu
    });

    res.status(201).json(category);
  }

  catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updateCategory = async (req, res) => {

  try {

    const { id } = req.params;

    const [updated] = await Category.update(req.body, {
      where: { id: id },
    });

    if (updated) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "categoria não encontrada" });
    }
  }

  catch (error) { res.status(500).json({ error: error.message }) }
}

export const deleteCategory = async (req, res) => {

  try {

    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (category) {

      await category.destroy({ where: { id: id } });
      res.status(204).send();
    }

    else { res.status(404).json({ message: "categoria não encontrada" }) }
  }

  catch (error) { res.status(500).json({ error: error.message }) }
}
