const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const { SERVER_PORT } = process.env
app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/../build`))
console.log(__dirname)

const {
  createUsers,
  getPosts,
  getComments,
  getUser,
  createPost,
  createComment,
  deletePost,
  getPostCount,
  putLikes
} = require('./controller.js')

app.post('/createUsers', createUsers)
app.post('/createPost', createPost)
app.put('/createComment', createComment)
app.put(`/putLikes/:post_id`, putLikes)
app.get('/getPosts', getPosts)
app.get('/getComments', getComments)
app.get('/getUser', getUser)
app.get('/getPostCount', getPostCount)
app.delete('/deletePost/:post_id', deletePost)

module.exports.handler = serverless(app);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})


