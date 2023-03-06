import { AppDataSource } from '../data-source'
import * as dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'
import { User } from '../entity/User'
import * as express from 'express'
import { Request, Response } from 'express'

const adminController = {
	login: async (req: Request, res: Response) => {
		const pseudo = req.body.pseudo
		const unhashedPassword = req.body.password
		// if (!(pseudo && password)) {
		// 	res.status(400).send()
		// }
		//Get user from database
		const userRepository = AppDataSource.getRepository(User)
		let userFound: User
		try {
			userFound = await userRepository.findOne({ where: { pseudo: pseudo } })
			if (!userFound) {
				return res.status(401).json({ message: 'invalid credentials pseudo !' })
			}
			const validPassword = await userFound.checkIfUnhashedPasswordIsValid(unhashedPassword)
			if (!validPassword) {
				return res.status(401).json({ message: 'invalid credentials password!' })
			}
				//Sing JWT, valid for 1 hour
				const token = jwt.sign(
					{ userId: userFound.id, pseudo: userFound.pseudo , role: userFound.role},
					process.env.jwtSecret,
					{ expiresIn: '1h' }
				)
				//Send the jwt in the response
				res.send(token)
			
		} catch (err) {
			res.status(500).json({ message: 'my code sucks, let me know!' })
		}
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
