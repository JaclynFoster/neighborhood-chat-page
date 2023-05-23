import React from 'react'
import '../components/Login/Login.css'
import Layout from '../components/Layout/Layout'
const Login = () => {
  return (
    <Layout>
      <div className="login-parent">
        <form className="login">
          <h1 className="join">Login</h1>
          <label>Username:</label>
          <input />
          <label>Password:</label>
          <input type="password" />
          <button>Submit</button>
        </form>

        <form className="signup">
          <h1 className="join">Join the Banter</h1>
          <h3 className="h3">Sign Up Today!</h3>
          <label>Create Username:</label>
          <input />
          <label>Create Password:</label>
          <input type="password" />
          <label>First Name:</label>
          <input />
          <label>Last Name:</label>
          <input />
          <label>Email</label>
          <input type="email" />
          <label>Add Profile Image URL:</label>
          <input />
          <button>Add Me</button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
