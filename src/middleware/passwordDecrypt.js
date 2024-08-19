import { compare } from "bcrypt";

export const comparePassword = (password, hash) => {

    compare(password, hash, (error, result) => {

        if(error) throw console.error('Error: ' + error);
        
        if(result) return password;
    });
}
