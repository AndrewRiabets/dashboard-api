import { Request, Response, NextFunction } from 'express'
import {inject, injectable} from 'inversify'
import {BaseController} from '../common/base.controller'
import { HTTPError } from '../errors/http-error.class'
import { ILogger } from '../logger/logger.interface'
import { LoggerService } from '../logger/logger.service'
import { TYPES } from '../types'
import 'reflect-metadata'

@injectable()
export class UserController extends BaseController {
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
        super(loggerService)
        this.bindRoutes([{path: '/register', method: 'post', func: this.register}]),
        this.bindRoutes([{path: '/login', method: 'post', func: this.login}])
    }

    login(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, 'login')
        next(new HTTPError(401, 'ошибка авторизации', 'login'))
    }
    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register')
    }
}