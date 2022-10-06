import { AppDataSource } from '../data-source'
import { Project } from '../entity/Project'
import * as express from 'express'
import { Request, Response } from 'express'

const projectController = {
  getAllProject: async (req: Request, res: Response) => {
    try {
      const results = await AppDataSource.getRepository(Project)
        .createQueryBuilder('project')
        .getMany()
      res.json(results)
    } catch (err) {
      console.error('ProjectController:', err)
    }
  },

  getProjectById: async (req: Request, res: Response) => {
    try {
      const results = await AppDataSource.createQueryBuilder()
        .select('project')
        .from(Project, 'project')
        .where('project.id = :id', { id: req.params.id })
        .getOneOrFail()
      res.json(results)
    } catch (err) {
      console.error('ProjectController:', err)
    }
  },

  addProject: async (req: Request, res: Response) => {
    try {
      const { name, description, git_url, web_url, userId } = req.body
      const results = await AppDataSource.createQueryBuilder()
        .insert()
        .into(Project)
        .values([
          {
            name: name,
            description: description,
            git_url: git_url,
            web_url: web_url,
            userId: userId
          }
        ])
        .execute()
      res.send(results)
    } catch (err) {
      console.error('ProjectController:', err)
    }
  },

  updateProjectById: async (req: Request, res: Response) => {
    try {
      const projectId: number = parseInt(req.params.id)
      const { name, description, git_url, web_url, userId } = req.body
      const results = await AppDataSource.createQueryBuilder()
        .update(Project)
        .set({
          id: projectId,
          name: name,
          description: description,
          git_url: git_url,
          web_url: web_url,
          userId: userId
        })
        .where('id = :id', { id: projectId })
        .execute()

      res.send(results)
    } catch (err) {
      console.error('ProjectController:', err)
    }
  },

  removeProjectById: async (req: Request, res: Response) => {
    try {
      const results = await AppDataSource.createQueryBuilder()
        .delete()
        .from(Project)
        .where('id = :id', { id: req.params.id })
        .execute()
      res.send(results)
    } catch (err) {
      console.error('ProjectController:', err)
    }
  }
}
module.exports = projectController
