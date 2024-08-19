import { hash, hashSync } from "bcrypt";

const saltRounds = 10;

export const cryptography = async (password) => {

    try {

        const hashedPassword = await hash(password, saltRounds);

        return hashedPassword;
    } 
    
    catch (error) { throw new Error('Error hashing password: ' + error) }
}
