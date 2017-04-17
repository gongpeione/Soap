import express from 'express'
import config from './config'
import './app/models/index'

// router
import routes from './app/routes'

// use middleware
import use from './common/use'
// logger
import './common/logger'

const app = new express()

use(app)
routes(app)

process.on('SIGINT', () => {
    console.log('bye~')
    process.exit()
})

app.listen(config.port, function(){
    console.log(`port ${config.port}!`)
    console.log(`biu~`)
})