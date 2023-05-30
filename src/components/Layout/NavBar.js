import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParam } from 'react-router-dom'
import './Layout.css'
import picture from '../../images/app-logo.png'
import AuthContext from '../../context/auth-context'

const NavBar = () => {
  const navigate = useNavigate()
  const props = useContext(AuthContext)
  const showBlog = () => {
    if (props.userObj.user_id) {
      return (
        <Link className="link" to="/blog">
          Blog
        </Link>
      )
    }
  }
  const hideLogin = () => {
    if (!props.userObj.user_id) {
      return (
        <Link className="link" to="/login">
          Login
        </Link>
      )
    } else {
      return (
        <button
          onClick={() => {
            props.setUserObj({})
          }}
        >
          Logout
        </button>
      )
    }
  }
  const { pathname } = useLocation()
  console.log(pathname)
  useEffect(
    () => {
      if (!props.userObj.user_id && pathname === '/blog') {
        navigate('/', { replace: true })
      }
    },
    [props.userObj.user_id]
  )
  return (
    <AuthContext.Consumer>
      {context => {
        console.log(context)
        return (
          <div className="nav">
            <img alt="Block Banter Logo" className="logo" src={picture} />
            <nav className="nav">
              <h1 className="title">Block Banter</h1>
              <Link className="link" to="/">
                Home
              </Link>
              {showBlog()}
              {/* <Link className="link" to="/signup">
          Signup
        </Link> */}
              {hideLogin()}
            </nav>
          </div>
        )
      }}
    </AuthContext.Consumer>
  )
}

export default NavBar


