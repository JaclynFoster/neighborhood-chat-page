import React, { useEffect, useRef, useState } from 'react'
import '../components/Login/Login.css'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
const { REACT_APP_BACKEND_URL } = process.env

const Login = () => {
  const refSubmit = useRef();


  const [passwordInput, handlePasswordChange] = useState("")
  const [usernameInput, handleUsernameChange] = useState("")
  const [getUsers, setUser] = useState({})
  const [createUser, setCreateUser] = useState({})
  const [usernameSignup, handleUsernameSignup] = useState("")
  const [passwordSignup, handlePasswordSignup] = useState("")
  const [firstNameSignup, handleFirstSignup] = useState("")
  const [lastNameSignup, handleLastSignup] = useState("")
  const [emailSignup, handleEmailSignup] = useState("")
  const [imageSignup, handleImageSignup] = useState("")


  const signupClickHandler = () => {
  
    refSubmit.current.setAttribute('disabled', true);

    axios.post(`${REACT_APP_BACKEND_URL}/createUsers`, {
      username: usernameSignup,
      password: passwordSignup,
      first_name: firstNameSignup,
      last_name: lastNameSignup,
      email: emailSignup,
      image_url: imageSignup

    })
    .then(response => {
    refSubmit.current.removeAttribute('disabled');
    console.log(response.data)
    alert("User created. Please login to continue.")
    setCreateUser([{...response.data}])
    handleUsernameSignup("")
    handlePasswordSignup("")
    handleFirstSignup("")
    handleLastSignup("")
    handleEmailSignup("")
    handleImageSignup("")
  })
  .catch(error => {
    refSubmit.current.removeAttribute('disabled');
  
      console.log("error on create user", error)
    })
  }
  const loginClickHandler = () => {
    axios
    .get(`${REACT_APP_BACKEND_URL}/getUser`, {
      params: {
        username: usernameInput,
        password: passwordInput
      }
    })
    .then(response => {
      if (response.data.length < 1) {
        alert("Username/Password combo does not exist")
      } else {

        setUser(...response.data)
      }

      console.log(response.data)
    })
    .catch(error => {
   
      console.log('error on get comments', error)
    })
  }
  useEffect(() => {
  
  }, [])
  return (
    <Layout>
      <div className="login-parent">
        <div key={getUsers.user_id}className="login">
          <h1 className="join">Login</h1>
          <label>Username:</label>
          <input value={usernameInput} onChange={e => handleUsernameChange(e.target.value)}/>
          <label>Password:</label>
          <input type="password" value={passwordInput} onChange={e => handlePasswordChange(e.target.value)}/>
          <button onClick={() => loginClickHandler()}>Submit</button>
        </div>

        <div key={createUser.user_id} className="signup">
          <h1 className="join">Join the Banter</h1>
          <h3 className="h3">Sign Up Today!</h3>
          <label>Create Username:</label>
          <input value={usernameSignup} onChange={e => handleUsernameSignup(e.target.value)}/>
          <label>Create Password:</label>
          <input type="password" value={passwordSignup} onChange={e => handlePasswordSignup(e.target.value)}/>
          <label>First Name:</label>
          <input value={firstNameSignup} onChange={e => handleFirstSignup(e.target.value)}/>
          <label>Last Name:</label>
          <input value={lastNameSignup} onChange={e => handleLastSignup(e.target.value)}/>
          <label>Email</label>
          <input type="email" value={emailSignup} onChange={e => handleEmailSignup(e.target.value)}/>
          <label>Add Profile Image URL:</label>
          <input value={imageSignup} onChange={e => handleImageSignup(e.target.value)}/>
          <button ref={refSubmit} onClick={() => signupClickHandler()}>Add Me</button>
        </div>
      </div>
    </Layout>
  )
}

export default Login
