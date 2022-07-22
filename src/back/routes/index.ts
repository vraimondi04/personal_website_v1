import express from 'express'
import webapp from './webapp'

const router = express.Router()

router.use('/health', (req, res) => { res.sendStatus(200) })
router.use('/', webapp)

export default router
