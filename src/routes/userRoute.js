import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';

const router = express.Router();

// Rota para obter todos os usuários
router.get('/users', getAllUsers);

// Rota para obter um usuário por ID
router.get('/users/:id', getUserById);

// Rota para criar um novo usuário
router.post('/users', createUser);

// Rota para atualizar um usuário por ID
router.put('/users/:id', updateUser);

// Rota para deletar um usuário por ID
router.delete('/users/:id', deleteUser);

export default router;
