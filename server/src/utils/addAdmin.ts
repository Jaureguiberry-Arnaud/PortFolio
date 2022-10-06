import { AppDataSource } from '../data-source'
import { User } from '../entity/User'

// This function check if the DB have an admin.
// if yes we console.log a text who said "Server's ready"
// if not we create an admin,

export async function addAdmin(password: string): Promise<void> {
	try {
		// Get user by role "admin" in the database
		const admin = await AppDataSource.getRepository(User)
			.createQueryBuilder('user')
			.where('user.role = :role', { role: 'admin' })
			.getOne()
		
		// if we have an admin we console "Server's ready"
		if (admin) {
			console.log("Server's ready.")
		} else {
		// else we create the admin
			let userAdmin = new User()
			userAdmin.pseudo = 'Jrgb'
			userAdmin.password = password
			userAdmin.hashPassword()
			userAdmin.role = 'admin'
			await AppDataSource.manager.save(userAdmin)
			console.log("Admin has been successfully created, server's ready")
		}
	} catch (err) {
		console.error('addAdmin:', err)
	}
}
