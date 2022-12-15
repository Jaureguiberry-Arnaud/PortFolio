import { AppDataSource } from '../data-source'
import { ENV } from '../my_env'
import * as jwt from 'jsonwebtoken'
import { User } from '../entity/User'
import * as express from 'express'
import { Request, Response } from 'express'

const adminController = {
	login: async (req: Request, res: Response) => {
		let { pseudo, password } = req.body
		if (!(pseudo && password)) {
			res.status(400).send()
		}
		//Get user from database
		const userRepository = AppDataSource.getRepository(User)
		let user: User
		try {
			user = await userRepository.findOneOrFail({ where: { pseudo } })
		} catch (err) {
			res.status(401).send()
		}
		//Check if encrypted password match
		if (!user.checkIfUnhashedPasswordIsValid(password)) {
			res.status(401).send()
			return
		}

		//Sing JWT, valid for 1 hour
		const token = jwt.sign(
			{ userId: user.id, pseudo: user.pseudo , role: user.role},
			ENV.jwtSecret,
			{ expiresIn: '1h' }
		)

		//Send the jwt in the response
		res.send(token)
	},

	getAdminByRole: async (req: Request, res: Response) => {
		try {
			// Get user by role "admin" in the database
			const results = await AppDataSource.getRepository(User)
				.createQueryBuilder('user')
				.where('user.role = :role', { role: 'admin' })
				.getOneOrFail()
			res.json(results)
		} catch (err) {
			console.error('AdminController:', err)
		}
	},
}
module.exports = adminController
