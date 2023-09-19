import React, { useEffect, useRef, useState, useContext } from 'react'
import '../components/Login/Login.css'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import AuthContext from '../context/auth-context'
import { useNavigate } from 'react-router-dom'
const { REACT_APP_BACKEND_URL } = process.env

const url = REACT_APP_BACKEND_URL || ''

const Login = () => {
  const props = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(props)

  const [passwordInput, handlePasswordChange] = useState('')
  const [usernameInput, handleUsernameChange] = useState('')
  const [userObject, setUser] = useState({})

  const loginClickHandler = () => {
    axios
      .get(`${url}/getUser`, {
        params: {
          username: usernameInput,
          password: passwordInput
        }
      })
      .then(response => {
        if (response.data.length < 1) {
          alert('Username/Password combo does not exist')
        } else {
          props.setUserObj({ ...response.data[0] })
          navigate('/', { replace: true })
        }

        console.log(response.data)
      })
      .catch(error => {
        console.log('error on get comments', error)
      })
  }

  const newSignupHandler = () => {
    navigate('/signup', { replace: true })
  }

  useEffect(() => {}, [])
  return (
    <Layout>
      <div className="login-parent login-height">
        <AuthContext.Provider value={{ user_id: userObject.user_id }}>
          <div key={userObject.user_id} className="login">
            <h1 className="join">Login</h1>
            <div className="username">
              <label>Username:</label>
              <input
                value={usernameInput}
                onChange={e => handleUsernameChange(e.target.value)}
              />
            </div>
            <div className="password">
              <label>Password:</label>
              <input
                type="password"
                value={passwordInput}
                onChange={e => handlePasswordChange(e.target.value)}
              />
            </div>
            <div className="login-btns">
              <button onClick={() => loginClickHandler()}>Submit</button>
              <label>Need an account?</label>
              <button onClick={() => newSignupHandler()}>Sign Up</button>
            </div>
          </div>
        </AuthContext.Provider>
      </div>
    </Layout>
  )
}

export default Login


