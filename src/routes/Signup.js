import React from 'react'
import axios from 'axios'
import AuthContext from '../context/auth-context'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useContext } from 'react'
import '../components/Login/Login.css'
import Layout from '../components/Layout/Layout'
import SignupModal from '../components/Login/SignupModal'
const { REACT_APP_BACKEND_URL } = process.env

const url = REACT_APP_BACKEND_URL || ''

const Signup = () => {
  const refSubmit = useRef()
  const props = useContext(AuthContext)
  const navigate = useNavigate
  const [createUser, setCreateUser] = useState({})
  const [usernameSignup, handleUsernameSignup] = useState('')
  const [passwordSignup, handlePasswordSignup] = useState('')
  const [firstNameSignup, handleFirstSignup] = useState('')
  const [lastNameSignup, handleLastSignup] = useState('')
  const [emailSignup, handleEmailSignup] = useState('')
  const [imageSignup, handleImageSignup] = useState('')
  const [showSignupModal, setShowSignupModal] = useState(false)

  const signupClickHandler = () => {
    refSubmit.current.setAttribute('disabled', true)

    axios
      .post(`${url}/createUsers`, {
        username: usernameSignup,
        password: passwordSignup,
        first_name: firstNameSignup,
        last_name: lastNameSignup,
        email: emailSignup,
        image_url: imageSignup
      })
      .then(response => {
        refSubmit.current.removeAttribute('disabled')
        console.log(response.data)
        setCreateUser([{ ...response.data }])
        setShowSignupModal(true)
        handleUsernameSignup('')
        handlePasswordSignup('')
        handleFirstSignup('')
        handleLastSignup('')
        handleEmailSignup('')
        handleImageSignup('')
      })
      .catch(error => {
        console.log('error on create user', error)
      })
  }

  return (
    <Layout>
      <div className="login-parent">
        <div key={createUser.user_id} className="signup">
          <div className="signup-header">
            <h1 className="join">Join the Banter</h1>
            <h3 className="h3">Sign Up Today!</h3>
          </div>
          <div className="signup-section">
            <div className="username">
              <label>Create Username:</label>
              <input
                value={usernameSignup}
                onChange={e => handleUsernameSignup(e.target.value)}
              />
            </div>
            <div className="password">
              <label>Create Password:</label>
              <input
                type="password"
                value={passwordSignup}
                onChange={e => handlePasswordSignup(e.target.value)}
              />
            </div>
          </div>
          <div className="signup-section">
            <div className="username">
              <label>First Name:</label>
              <input
                value={firstNameSignup}
                onChange={e => handleFirstSignup(e.target.value)}
              />
            </div>
            <div className="password">
              <label>Last Name:</label>
              <input
                value={lastNameSignup}
                onChange={e => handleLastSignup(e.target.value)}
              />
            </div>
          </div>
          <div className="signup-section">
            <div className="username">
              <label>Email:</label>
              <input
                type="email"
                value={emailSignup}
                onChange={e => handleEmailSignup(e.target.value)}
              />
            </div>
            <div className="password">
              <label>Add Profile Image URL:</label>
              <input
                value={imageSignup}
                onChange={e => handleImageSignup(e.target.value)}
              />
            </div>
          </div>
          {showSignupModal ? (
            <SignupModal setShowSignupModal={setShowSignupModal} />
          ) : null}
          <button
            className="add-me-btn"
            ref={refSubmit}
            onClick={() => signupClickHandler()}
          >
            Add Me
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Signup

