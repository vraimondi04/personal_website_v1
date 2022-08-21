import express from 'express'
import webapp from './webapp'
import api from './api'

const router = express.Router()

router.use('/health', (req, res) => { res.sendStatus(200) })
router.use('/api', api)
router.use('/', webapp)

export default router
