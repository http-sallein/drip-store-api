import { hash } from "bcrypt";

const saltRounds = 10;

export const cryptography = (password) => {

    hash(password, saltRounds, (error, hash) => {

        if(error) throw console.error('Error:' + error);        

        return hash;
    });
}
