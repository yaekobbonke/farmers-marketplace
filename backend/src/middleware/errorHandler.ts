import { error } from "console";
import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction){
    console.error(error);
    return res.status(400).json({
        message: error || "An error occured"
    });
}