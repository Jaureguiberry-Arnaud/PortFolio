import * as express from "express"
const router = require('express').Router()

const apiRouter = require('./apiRouter')

router.use('/', apiRouter)

module.exports = router