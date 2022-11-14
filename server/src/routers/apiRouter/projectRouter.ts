import * as express from "express"
import { checkRole } from "../../middleware/checkRole"
import { checkJwt } from "../../middleware/checkJwt"
const router = require('express').Router()
const projectController = require('../../controllers/projectController')

router.get('/projects', projectController.getAllProject)
router.get('/projects/:id', projectController.getProjectById)
router.post('/projects', [checkJwt, checkRole(["admin"])], projectController.addProject)
router.put('/projects/:id', checkRole(["admin"]), projectController.updateProjectById)
router.delete('/projects/:id', [checkJwt, checkRole(["admin"])], projectController.removeProjectById)

module.exports = router