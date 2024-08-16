import jwt from 'jsonwebtoken';

export const createJwtToken = (userInformations, expiresIn) => {

    const name = `${userInformations.firstName} ${userInformations.surName}`;

    const token = jwt.sign({

        id: userInformations.id,
        name: name,
        createdAt: userInformations.createdAt
    }, 'Secret Key', { expiresIn });

    return token;
}
