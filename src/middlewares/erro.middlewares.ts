import { Request, Response, NextFunction } from "express";
import { HttpExeption } from "../interfaces/HttpExeption";


export function errorMiddlewares (err:HttpExeption, req:Request, res:Response, next:NextFunction) {
    const status:number = err.status ?? 500
    const message:string = err.message ?? "internal server error"


    res.status(status).json({
        status,
        message
    })

}