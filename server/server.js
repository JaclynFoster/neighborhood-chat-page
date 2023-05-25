const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const { SERVER_PORT } = process.env
app.use(express.json())
app.use(cors())

const {
  createUsers,
  getPosts,
  getComments,
  getUser,
  createPost,
  createComment,
  deletePost
} = require('./controller.js')

app.post('/createUsers', createUsers)
app.post('/createPost', createPost)
app.post('/createComment', createComment)
app.get('/getPosts', getPosts)
app.get('/getComments', getComments)
app.get('/getUser', getUser)
app.delete('/deletePost:post_id', deletePost)

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})
