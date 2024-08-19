import { User } from "../models/user.js";

import { cryptography } from "../middleware/passwordEncryption.js";
import { comparePassword } from '../middleware/passwordDecrypt.js';
import { createJwtToken } from './../middleware/createJwtToken.js';

export const loginUser = async (request, response) => {
    try {
        const { email, password } = request.body;

        const user = await User.findOne({ where: { email } });

        if (!user || comparePassword(password, user.password)) {
            return response.status(400).json({ message: 'Credencias inválidas' });
        }

        const userInformations = {
            id: user.id, name: user.full_name, createdAt: user.createdAt
        }
        const token = createJwtToken(userInformations, '1h')

        response.status(200).json({
            token,
            message: 'Login efetuado com sucesso',
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                createdAt: user.createdAt,
            }
        });

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

// Get all users
export const getAllUsers = async (req, res) => {

    try {

        const users = await User.findAll();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
export const getUserById = async (req, res) => {

    try {

        const { id } = req.params;
        const user = await User.findByPk(id);

        if (user) { res.status(200).json(user) } 

        else { res.status(404).json({ message: "Usuário não encontrado" }) }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
export const createUser = async (req, res) => {

    try {

        const password = await cryptography(req.body.password);
        const firstName = req.body.first_name;
        const surName = req.body.sur_name;
        const email = req.body.email;

        if(req.body.password != req.body.confirmPassword) 
            throw new Error('passwords not matched')
        ; 
        
        const user = await User.create({
            first_name: firstName,
            sur_name: surName,
            email: email, 
            password: password 
        });

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Update a user by ID
export const updateUser = async (req, res) => {

    try {

        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id: id },
        });

        if (updated) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {

    try {

        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
