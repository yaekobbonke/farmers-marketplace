import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";
import { registerSchema, loginSchema } from "./auth.schema";


export class AuthController {
    static async register(req: Request, res:Response, next: NextFunction){
       try {
        const data = registerSchema.parse(req.body);
        const result = await AuthService.register(data);
        return res.status(201).json(result);
    }catch(error){
        next(error);
}
}
    static async login(req: Request, res: Response, next: NextFunction){
        try{
            const data = loginSchema.parse(req.body);
            const result = await AuthService.login(data);
            return res.status(200).json(result); 
        } catch(err){
            next(err)
        }
    }
}
