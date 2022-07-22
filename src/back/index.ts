import config from 'config'

import app from './app'

require('dotenv').config()

app.listen(config.get('httpPort'), () => {
    console.log('Listening on... ', config.get('httpPort'))
})
