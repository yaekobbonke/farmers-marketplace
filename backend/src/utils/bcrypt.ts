import bcryt from "bcrypt";

export async function hashPassword(password:string) {
    return bcryt.hash(password, 10);
    
}

export async function comparePassword(password: string, hash: string) {
    return bcryt.compare(password, hash);
    
}