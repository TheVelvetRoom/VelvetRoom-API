const router = require('express').Router()
const arcanaRoute = require('./arcanaRoute')
const personaRoute = require('./personaRoute')

router
    .use('/arcana', arcanaRoute)
    .use('/persona', personaRoute)

module.exports = router