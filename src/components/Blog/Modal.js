import React, { useContext, useState, useEffect } from 'react'
import '../Blog/Blog.css'
import AuthContext from '../../context/auth-context'
import axios from 'axios'
const { REACT_APP_BACKEND_URL } = process.env

const Modal = ({
  setShowModal,
  setCommentList,
  post_id,
  getCommentsHandler
}) => {
  const [createComment, setCreateComment] = useState('')
  const props = useContext(AuthContext)
  console.log(post_id)
  const createCommentHandler = () => {
    axios
      .post(`${REACT_APP_BACKEND_URL}/createComment`, {
        post_id: post_id,
        user_id: props.userObj.user_id,
        comment: createComment
      })
      .then(response => {
        getCommentsHandler()
        setShowModal(false)
        console.log(response.data)
      })
      .catch(error => {
        console.log('error on create comments', error)
      })
  }
  const clickHandler = e => {
    if (e.target.id === 'modalBackground') {
      console.log(e.target.id)
      setShowModal(false)
    }
  }
  return (
    <div
      id="modalBackground"
      onClick={clickHandler}
      className="background-modal-div"
    >
      <div className="modal-box">
        <div className="leave-comment">
          <input
            value={createComment}
            onChange={e => {
              setCreateComment(e.target.value)
            }}
            className="comment-input"
            placeholder="Leave a comment..."
          />
          <button onClick={() => createCommentHandler()}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Modal

