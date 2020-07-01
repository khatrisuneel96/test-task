const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/users')
const tournamentRouter = require('./routers/tournaments')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(tournamentRouter)

module.exports = app