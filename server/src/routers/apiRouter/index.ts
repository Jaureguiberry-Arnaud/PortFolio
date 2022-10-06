import * as express from 'express'
const router = require('express').Router()

const adminRouter = require('./adminRouter')
const projectRouter = require('./projectRouter')
const logRouter = require('./logRouter')

router.use('/', adminRouter)
router.use('/', projectRouter)
router.use('/', logRouter)

module.exports = router;
