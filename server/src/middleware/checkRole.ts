import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'

import { User } from '../entity/User'

export const checkRole = (roles: Array<string>) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		//Get the user ID from previous middleware
		const id = res.locals.jwtPayload.userId
		//Get user role from the database
		let user: User
		try {
			user = await AppDataSource.createQueryBuilder()
        .select('user')
        .from(User, 'user')
        .where('user.id = :id', { id: id })
        .getOneOrFail()
			console.log(user)
		} catch (id) {
			
    console.log("erreur checkRole")
			res.status(401).send()
		}

		//Check if array of authorized roles includes the user's role
		if (roles.indexOf(user.role) > -1) next()
		else res.status(401).send()
	}
}
