const QUERY_CREATE_USER = `
INSERT INTO users (username, password, first_name, last_name, email, image_url)
VALUES (?,?,?,?,?,?)
`
const QUERY_CREATE_POST = `
INSERT INTO posts (user_id, post)
VALUES (?,?)
`
const QUERY_CREATE_COMMENT = `
INSERT INTO comments (post_id, user_id, comment)
VALUES (?,?,?)

`
const QUERY_GET_POSTS = `
SELECT posts.*, users.username, users.image_url FROM posts
JOIN users
ON users.user_id = posts.user_id
ORDER BY posts.post_id DESC
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
const QUERY_GET_POST_COUNT = `
SELECT COUNT(*)
FROM posts
WHERE user_id = ?
`

const QUERY_DELETE_POST = `
DELETE FROM posts
WHERE post_id = ?
`

const QUERY_PUT_LIKES = `
UPDATE posts
SET likes = (1 + (SELECT likes FROM posts WHERE post_id = ?))
WHERE post_id = ?
`
module.exports = {
  QUERY_CREATE_USER,
  QUERY_GET_POSTS,
  QUERY_GET_COMMENTS,
  QUERY_GET_USER,
  QUERY_CREATE_POST,
  QUERY_CREATE_COMMENT,
  QUERY_DELETE_POST,
  QUERY_GET_POST_COUNT,
  QUERY_PUT_LIKES
}


