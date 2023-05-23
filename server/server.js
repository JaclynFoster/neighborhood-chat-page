const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const { SERVER_PORT } = process.env
app.use(express.json())
app.use(cors())

const { createUsers, getPosts, getComments } = require('./controller.js')

app.post('/users', createUsers)
app.get('/getPosts', getPosts)
app.get('/getComments', getComments)

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})
