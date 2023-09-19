import React, { useContext, useEffect, useState } from 'react'
import '../Blog/Blog.css'
import axios from 'axios'
import Modal from './Modal'
import AuthContext from '../../context/auth-context'
import heart from './heart.png'
const { REACT_APP_BACKEND_URL } = process.env

const url = REACT_APP_BACKEND_URL || ''

const Posts = ({
  postList,
  getPostsHandler,
  postLikes,
  setPostLikes,
  getPostCount
}) => {
  const [showModal, setShowModal] = useState(false)
  const [commentList, setCommentList] = useState([])

  const props = useContext(AuthContext)

  const getCommentsHandler = () => {
    axios
      .get(`${url}/getComments`)
      .then(response => {
        setCommentList([...response.data])

        console.log(response.data)
      })
      .catch(error => {
        console.log('error on get comments', error)
      })
  }

  const putLikesHandler = post_id => {
    axios
      .put(`${url}/putLikes/${post_id}`)
      .then(response => {
        getPostsHandler()
        console.log(response.data)
      })
      .catch(error => {
        console.log('error on likes', error)
      })
  }

  const deletePost = post_id => {
    axios.delete(`${url}/deletePost/${post_id}`).then(response => {
      getPostsHandler()
      console.log(response.data)
    })
  }

  useEffect(() => {
    getCommentsHandler()
  }, [])
  console.log('commentList', commentList)
  return (
    <div className="posts-container">
      {postList.map(post => {
        return (
          <div className="posts">
            <div className="likes-container">
              <span className="likes">{post.likes}</span>
              <img
                src={heart}
                className="like-btn"
                onClick={() => putLikesHandler(post.post_id)}
              />
            </div>
            <time className="date">{post.date}</time>
            <div key={post.post_id}>
              <img className="comment-pic" src={post.image_url} />
              <label className="post-username">{post.username}:</label>
              <pre> {post.post}</pre>
              <h4 className="comment-title">Comments:</h4>
              <section className="comment-section">
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
                      <div key={comment.comment_id} className="comment">
                        <img className="comment-pic" src={comment.image_url} />
                        <label className="comment-username">
                          {comment.username}:
                        </label>
                        <span>{comment.comment}</span>
                      </div>
                    )
                  })}
              </section>
              {post.post_id === showModal ? (
                <Modal
                  getCommentsHandler={getCommentsHandler}
                  post_id={post.post_id}
                  setShowModal={setShowModal}
                />
              ) : null}
              <div className="add-delete-container">
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
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts




