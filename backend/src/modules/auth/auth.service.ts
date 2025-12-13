import prisma from "../../config/prisma";
import { hashPassword, comparePassword } from "../../utils/bcrypt";
import { RegisterInput, LoginInput } from "./auth.types";
//import { registerSchema, loginSchema } from "./auth.schema";
import { signToken } from "../../utils/jwt";
import { email, input, json } from "zod";
import { error } from "console";


export class AuthService{
    static async register(input:RegisterInput) {
        const exists = await prisma.user.findUnique({
            where: { email: input.email },
        });
        if(exists){
            return { 
                status: 409, message: "User already registered" 
            };
        }
        
        const hashed = await hashPassword(input.password);

        const user = await prisma.user.create({
            data: {
                first_name: input.first_name,
                last_name: input.last_name,
                location: input.location,
                email: input.email,
                phone: input.phone,
                password: hashed
            },
        });
        return {
            message: "User created successfully",
            userId: user.id
        }
    }

    static async login(input: LoginInput){
        const user = await prisma.user.findUnique({
            where: {
                email: input.email
            },
        });
        if(!user){
            return {
                message: "Email not registered"
            }
        }

        const valid = await comparePassword(user.password, input.password)
        if(!valid){
            return {
                message: "Invalid cresential"
            }
        }
        const token = signToken({userId: user.id});

        return {
            message: "Login successful",
            token
        }
    }
}