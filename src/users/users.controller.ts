import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface';

class User {}
const users = [];
@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([{ path: '/register', method: 'post', func: this.register }]),
			this.bindRoutes([{ path: '/login', method: 'post', func: this.login }]);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		users.push(new User());
		next(new HTTPError(401, 'ошибка авторизации', 'login'));
	}
	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
