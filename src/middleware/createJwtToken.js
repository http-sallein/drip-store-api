import jwt from 'jsonwebtoken';
import dotenv from  'dotenv'

dotenv.config();

export const createJwtToken = (userInformations, expiresIn) => {

    const name = `${userInformations.firstName} ${userInformations.surName}`;

    const token = jwt.sign({

        id: userInformations.id,
        name: name,
        createdAt: userInformations.createdAt
    }, process.env.ACCESS_TOKEN_SECRET || 'Secret', { expiresIn });

    return token;
}
