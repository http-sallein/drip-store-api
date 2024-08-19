import express from 'express';
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController.js';

import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gerenciamento de categorias
 */

/**
 * @swagger
 * /category/search:
 *   get:
 *     summary: Recupera todas as categorias
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/category/search', getAllCategories);

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Recupera uma categoria pelo ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Dados da categoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/category/:id', getCategoryById);

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Cria uma nova categoria
 *     security:
 *       - BearerAuth: [] 
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/category', authenticateToken ,createCategory);

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: Atualiza os dados de uma categoria
 *     security:
 *       - BearerAuth: [] 
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       204:
 *         description: Categoria atualizada com sucesso
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/category/:id', authenticateToken, updateCategory);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Exclui uma categoria
 *     security:
 *       - BearerAuth: [] 
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     responses:
 *       204:
 *         description: Categoria excluída com sucesso
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/category/:id', authenticateToken, deleteCategory);

export default router;
