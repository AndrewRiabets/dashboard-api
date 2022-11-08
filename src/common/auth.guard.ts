import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { IMiddleware } from './middleware.interface';

export class AuthGuard implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction): void {
		console.log(req.user);
		if (req.user) {
			return next();
		}
		res.status(401).send({ error: 'Вы не авторизованы' });
	}
}
