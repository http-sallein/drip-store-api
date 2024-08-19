import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Token não fornecido' });

    try {
        
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || 'Secret');
        req.user = user;
        next();
    } 
    
    catch (error) { res.status(403).json({ message: 'Token inválido' }) }
};
