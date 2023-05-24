import React, { useState } from 'react'
import '../Blog/Blog.css'

const Modal = ({ setShowModal }) => {
  const closeModal = () => setShowModal(false)
  const closeModalHandler = <button onClick={closeModal}>X</button>

  return (
    <div onClick={() => setShowModal(false)} className="background-modal-div">
      <div className="modal-box">
        <div className="leave-comment">
          <input className="comment-input" placeholder="Leave a comment..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
