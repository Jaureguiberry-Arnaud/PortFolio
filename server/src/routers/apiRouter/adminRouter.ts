import * as express from "express"
import { checkJwt } from "../../middleware/checkJwt"
import { checkRole } from "../../middleware/checkRole"
const router = require('express').Router()
const adminController = require('../../controllers/adminController')

router.post('/login', adminController.login)
router.get('/user/admin', checkRole(["admin"]), adminController.getAdminByRole)

module.exports = router;