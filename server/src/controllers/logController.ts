import { AppDataSource } from '../data-source'
import { Log } from '../entity/Log'
// import * as express from "express"
import { Request, Response } from 'express'

const logController = {
    getAllLog: async (req: Request, res: Response) => {
		try {
			const results = await AppDataSource.getRepository(Log)
				.createQueryBuilder('log')
				.getMany()
			res.json(results)
		} catch (err) {
			console.error('ProjectController:', err)
		}
	},

	getLogById: async (req: Request, res: Response) => {
		try {
			const results = await AppDataSource.createQueryBuilder()
				.select('log')
				.from(Log, 'log')
				.where('log.id = :id', { id: req.params.id })
				.getOneOrFail()
			res.json(results)
		} catch (err) {
			console.error('ProjectController:', err)
		}
	},

	getLogByProjectId: async (req: Request, res: Response) => {
		try {
			const results = await AppDataSource.createQueryBuilder()
				.select('log')
				.from(Log, 'log')
				.where('log.projectId = :id', { id: req.body.projectId })
				.getOneOrFail()
			res.json(results)
		} catch (err) {
			console.error('ProjectController:', err)
		}
	},

	addLog: async (req: Request, res: Response) => {
		try {
			const results = await AppDataSource.createQueryBuilder()
				.insert()
				.into(Log)
				.values([
					{
						projectId: req.body.projectId,
					},
				])
				.execute()
			res.send(results)
		} catch (err) {
			console.error('ProjectController:', err)
		}
	},

	removeLogById: async (req: Request, res: Response) => {
		try {
			const results = await AppDataSource.createQueryBuilder()
				.delete()
				.from(Log)
				.where('id = :id', { id: req.params.id })
				.execute()
			res.send(results)
		} catch (err) {
			console.error('ProjectController:', err)
		}
	},
}
module.exports = logController
