const Sequelize = require('sequelize')
const { CONNECTION_STRING } = process.env
const {
  QUERY_CREATE_USER,
  QUERY_GET_POSTS,
  QUERY_GET_COMMENTS,
  QUERY_GET_USER
} = require('./QUERIES')

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})

const createUsers = (req, res) => {
  const {
    username,
    password,
    first_name,
    last_name,
    email,
    image_url
  } = req.body
  sequelize
    .query(QUERY_CREATE_USER, {
      replacements: [
        username,
        password,
        first_name,
        last_name,
        email,
        image_url
      ]
    })
    .then(dbRes => {
      res.sendStatus(200)
    })
    .catch(error => {
      console.log('Error', error)
    })
}

const getPosts = (req, res) => {
  sequelize
    .query(QUERY_GET_POSTS)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(error => {
      console.log('error getPosts', error)
    })
}

const getComments = (req, res) => {
  sequelize
    .query(QUERY_GET_COMMENTS)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(error => {
      console.log('error get comments', error)
    })
}

const getUser = (req, res) => {
  const {username, password} = req.query
  sequelize
  .query(QUERY_GET_USER, {
    replacements: [username, password]
  })
  .then(dbRes => {
    res.status(200).send(dbRes[0])
  })
  .catch(error => {
    console.log("login error", error)
  })
}
module.exports = { createUsers, getPosts, getComments, getUser }
