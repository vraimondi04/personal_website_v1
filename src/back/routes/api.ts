import axios from 'axios'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const result = await axios.post('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
            },
            body: 'grant_type=client_credentials'
        })

        const data = await result.data
        console.log(data)

        res.json(data.access_token)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(500)
    }
})

export default router
