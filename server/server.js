const express = require("express")
const cors = require("cors")
const app = express()
const {SERVER_PORT} = process.env;
require('dotenv').config()
app.use(express.json())
app.use(cors())

const {createUsers} = require("./controller.js")

app.post("/users", createUsers)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})