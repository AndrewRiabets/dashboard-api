import { NextFunction, Request, Response } from "express";
import { LoggerService } from "../logger/logger.service";
import { IExeprionFilter } from "./exeption.filter.interface";
import { HTTPError } from "./http-error.class";


export class ExeptionFilter implements IExeprionFilter {
    logger: LoggerService
    constructor(logger: LoggerService) {
        this.logger = logger
    }
    catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction) {
        if (err instanceof HTTPError) {
            this.logger.error(`[${err.context}] Ошибка ${err.statusCode}: ${err.message}`)           
            res.status(401).send({err: err.message})
        
        } else {
            this.logger.error(`${err.message}`)
            res.status(500).send({err: err.message})
        }
    }
}