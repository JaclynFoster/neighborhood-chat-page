import React, { useContext, useEffect, useState } from 'react'
import '../Blog/Blog.css'
import axios from 'axios'
import Modal from './Modal'
import AuthContext from '../../context/auth-context'
const { REACT_APP_BACKEND_URL } = process.env

const Posts = ({ postList, getPostsHandler }) => {
  const [showModal, setShowModal] = useState(false)
  const [commentList, setCommentList] = useState([])
  const [showDelete, setShowDelete] = useState(false)

  const props = useContext(AuthContext)

  const getCommentsHandler = () => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/getComments`)
      .then(response => {
        setCommentList([...response.data])

        console.log(response.data)
      })
      .catch(error => {
        console.log('error on get comments', error)
      })
  }
  const deletePost = post_id => {
    axios
      .delete(`${REACT_APP_BACKEND_URL}/deletePost${post_id}`)
      .then(response => {
        getPostsHandler()
        console.log(response.data)
      })
  }

  useEffect(() => {
    getCommentsHandler()
  }, [])
  console.log('commentList', commentList)
  return (
    <div>
      {postList.map(post => {
        return (
          <div className="posts">
            <div key={post.post_id}>
              <img className="comment-pic" src={post.image_url} />
              <label>{post.username}:</label>
              <pre>{post.post}</pre>
              <section className="comment-section">
                <h4>Comments:</h4>
                {commentList
                  .filter(comment => {
                    // this is an object
                    // this will return a new array of comments where the comment post id matches the post id
                    return comment.post_id === post.post_id
                  })
                  .map(comment => {
                    // determine how to show them
                    // this is a smaller list of the commentList with the matching data
                    return (
                      <div key={comment.comment_id}>
                        <img className="comment-pic" src={comment.image_url} />
                        <label>{comment.username}: </label>
                        <span>{comment.comment}</span>
                      </div>
                    )
                  })}
                {post.post_id === showModal ? (
                  <Modal
                    getCommentsHandler={getCommentsHandler}
                    post_id={post.post_id}
                    setShowModal={setShowModal}
                  />
                ) : null}
                <button onClick={() => setShowModal(post.post_id)}>
                  Add Comment
                </button>`
                {post.user_id === props.userObj.user_id ? (
                  <button
                    className="delete-btn"
                    onClick={() => deletePost(post.post_id)}
                  >
                    Delete
                  </button>
                ) : null}
              </section>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts


