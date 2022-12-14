import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			// verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
			// 	if (err) {
			// 		next();
			// 	} else if (payload) {
			// req.user = payload.email;
			// 	}
			// });
			verify(token, this.secret, (err, payload) => {
				if (err) {
					next();
				}
				const { email } = decode(token) as { email: string };
				req.user = email;
				next();
			});
		}
	}
}
