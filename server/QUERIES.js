const QUERY_CREATE_USER = `
INSERT INTO users (username, password, first_name, last_name, email, image_url)
VALUES (?,?,?,?,?,?)
`
const QUERY_GET_POSTS = `
SELECT posts.*, users.username, users.image_url FROM posts
JOIN users
ON users.user_id = posts.user_id
`

const QUERY_GET_COMMENTS = `
    SELECT comments.*, users.username, users.image_url FROM comments
    JOIN users
    ON users.user_id = comments.user_id
`

const QUERY_GET_USER = `
SELECT * FROM users
WHERE users.username = ?
AND users.password = ?

`
module.exports = { QUERY_CREATE_USER, QUERY_GET_POSTS, QUERY_GET_COMMENTS, QUERY_GET_USER }
