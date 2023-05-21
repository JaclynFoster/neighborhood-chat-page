const QUERY_CREATE_USER = `
INSERT INTO users (username, password, first_name, last_name, email, phone, receive_updates, image)
VALUES (?,?,?,?,?,?,?,?)
`

module.exports = {QUERY_CREATE_USER}