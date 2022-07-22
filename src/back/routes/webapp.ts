import express from 'express'
import history from 'connect-history-api-fallback'
import config from 'config'

const router = express.Router()

router.use(history())

if (config.get('shouldUseDevelopmentFeatures')) {
    const webpack = require('webpack')
    const middleware = require('webpack-dev-middleware')
    const compiler = webpack(require('../../../webpack.config'))
    router.use(
        middleware(compiler, {
            // webpack-dev-middleware options
        })
    )
} else {
    router.use(express.static('dist/front'))
}

export default router
