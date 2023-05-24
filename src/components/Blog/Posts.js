import React, { useEffect, useState } from 'react'
import '../Blog/Blog.css'
import axios from 'axios'
import Modal from './Modal'
const { REACT_APP_BACKEND_URL } = process.env

const Posts = ({ postList }) => {
  const [showModal, setShowModal] = useState(false)
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/getComments`)
      .then(response => {
        setCommentList([...response.data])

        console.log(response.data)
      })
      .catch(error => {
        console.log('error on get comments', error)
      })
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
                {showModal ? <Modal setShowModal={setShowModal} /> : null}
                <button onClick={() => setShowModal(true)}>Add Comment</button>
              </section>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts

