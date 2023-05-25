import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Login/Login.css'

const SignupModal = ({ setShowSignupModal }) => {
  const navigate = useNavigate()
  const signupClickHandler = () => {
    setShowSignupModal(false)
    navigate('/login', { replace: true })
  }
  return (
    <div
      id="modal-signup-background"
      className="background-modal-div"
      onClick={signupClickHandler}
    >
      <div className="modal-box">
        <span>Thank you for joining us! Please login to continue.</span>
      </div>
    </div>
  )
}

export default SignupModal
