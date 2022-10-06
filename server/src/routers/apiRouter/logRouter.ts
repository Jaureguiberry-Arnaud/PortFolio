import * as express from "express"
import { checkRole } from "../../middleware/checkRole"
const router = require('express').Router()
const logController = require('../../controllers/logController')

router.get('/logs', logController.getAllLog)
router.get('/logs/:id', logController.getLogById)
router.get('/logs/:projectId', logController.getLogByProjectId)
router.post('/logs', logController.addLog)
router.delete('/logs/:id', checkRole(["admin"]), logController.removeLogById) 

module.exports = router;