import express from 'express';

import { loginUser, createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';

const router = express.Router();

// Rota para login de usuário
/**
 * @swagger
 * /user/token:
 *   post:
 *     summary: Faz o login do usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     full_name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/user/token', loginUser);


// Rota para obter todos os usuários
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Recupera todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get('/user', getAllUsers);

// Rota para obter um usuário por ID
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Recupera um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Dados do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/user/:id', getUserById);

// Rota para criar um novo usuário
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               sur_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *             required:
 *               - first_name
 *               - sur_name
 *               - email
 *               - password
 *               - confirmPassword
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Senhas não coincidem ou dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/user', createUser);

// Rota para atualizar um usuário por ID
/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               sur_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - first_name
 *               - sur_name
 *               - email
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/user/:id', updateUser);

// Rota para deletar um usuário por ID
/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Exclui um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/user/:id', deleteUser);

export default router;
