import { email, z } from "zod";


export const registerSchema = z.object({
    first_name: z.string().min(2),
    last_name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    location: z.string().min(2),
    password: z.string().min(8),
    role: z.enum(["FARMER", "BUYER"]).optional(),
});


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

