const Sequelize = require("sequelize")
const {CONNECTION_STRING} = process.env
const {QUERY_CREATE_USER} = require("./QUERIES")

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  })

  const createUsers = (req, res) => {
    const {username, password, first_name, last_name, email, phone, receive_updates, image} = req.body
    sequelize.query(QUERY_CREATE_USER, {
        replacements: [username, password,first_name, last_name, email, phone, receive_updates, image]
    })
    .then(dbRes => {
        alert("User Created. Please return to Login and sign in.")
        res.sendStatus(200)
    })
    .catch(error => {
        console.log("Error", error)
    })
}

module.exports = {createUsers}